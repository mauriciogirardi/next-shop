interface FormattedCurrencyProps {
  priceInCents: number;
}

export const formattedCurrency = ({ priceInCents }: FormattedCurrencyProps) => {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100);
};
