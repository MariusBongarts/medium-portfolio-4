export function encodeObject(object: Object) {
  return encodeURIComponent(JSON.stringify(object));
}
export function decodeObject(stringified: string) {
  return JSON.parse(decodeURIComponent(stringified));
}
