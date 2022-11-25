import jsCookie from "js-cookie";
export function getUser(): string | null {
  return jsCookie.get().user;
}
