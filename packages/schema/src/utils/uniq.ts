export function uniq(required: any | string[]) {
  return Array.from(new Set(required).values());
}
