export const booksy='https://booksy.com/en-us/1558885_sam-h-enjaya_hair-salon_134656_san-diego';

export function booksyService(variantId: number) {
  return `${booksy}?do=open-widget&variantId=${variantId}`;
}
