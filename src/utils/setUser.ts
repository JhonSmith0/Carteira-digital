import jsCookie from "js-cookie";
export function setUser(user: string): void {
  jsCookie.set("user", user);
}
