export default function formatCurrency(value) {
  value = String(value).replace(/(\d{2})$/, ".$&");
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
