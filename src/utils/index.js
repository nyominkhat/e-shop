export function numberFormat(number) {
  let num;
  return (num = new Intl.NumberFormat().format(number));
}
