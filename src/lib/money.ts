export const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatMoney(value: number) {
  return currencyFormat.format(value);
}
