export function formatNumberWithCommas(sting: string): string {
  return sting.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
