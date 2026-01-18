import { useState, useEffect } from "react";

export function useTokenPrices() {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.hyperliquid.xyz/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "allMids" }),
      });
      const mids = await res.json();
      setPrices({
        BTC: parseFloat(mids["BTC"] || "0"),
        ETH: parseFloat(mids["ETH"] || "0"),
        SOL: parseFloat(mids["SOL"] || "0"),
      });
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return prices;
}
