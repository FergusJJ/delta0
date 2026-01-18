package main

import (
	"database/sql"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	_ "github.com/mattn/go-sqlite3"
)

type UpdateRequest struct {
	TokenAddress  string  `json:"token_address"`
	WalletAddress string  `json:"wallet_address"`
	Amount        float64 `json:"amount"`
}

type UpdateResponse struct {
	TokenAddress string  `json:"token_address"`
	Amount       float64 `json:"amount"`
}

func main() {
	var err error
	db, err := sql.Open("sqlite3", "/data/balances.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS balances (
			wallet_address TEXT NOT NULL,
			token_address TEXT NOT NULL,
			amount REAL DEFAULT 0,
			PRIMARY KEY (wallet_address, token_address)
		)
	`)
	if err != nil {
		log.Fatal(err)
	}

	app := fiber.New()
	app.Use(cors.New())
	app.Use(logger.New())

	app.Post("/update", func(c *fiber.Ctx) error {
		return handleUpdate(c, db)
	})

	log.Fatal(app.Listen(":8080"))
}

func handleUpdate(c *fiber.Ctx, db *sql.DB) error {
	var req UpdateRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	var newAmount float64

	_, err := db.Exec(`
			INSERT INTO balances (wallet_address, token_address, amount)
			VALUES (?, ?, ?)
			ON CONFLICT(wallet_address, token_address)
			DO UPDATE SET amount = amount + ?
		`, req.WalletAddress, req.TokenAddress, req.Amount, req.Amount)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	err = db.QueryRow(`
		SELECT amount FROM balances
		WHERE wallet_address = ? AND token_address = ?
	`, req.WalletAddress, req.TokenAddress).Scan(&newAmount)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(UpdateResponse{
		TokenAddress: req.TokenAddress,
		Amount:       newAmount,
	})
}
