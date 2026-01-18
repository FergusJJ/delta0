import config from "../../../config/config";

export async function sendVaultStatus({
  tokenAddress,
  walletAddress,
  amount,
}: {
  tokenAddress: `0x${string}`;
  walletAddress: `0x${string}`;
  amount: number;
}): Promise<{ tokenAddress: `0x${string}`; amount: number }> {
  const url = `${config.backendUrl}/update`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token_address: tokenAddress,
      wallet_address: walletAddress,
      amount: amount,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to update vault status");
  }

  const data = await response.json();
  return {
    tokenAddress: data.token_address,
    amount: data.amount,
  };
}
