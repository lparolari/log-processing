import * as fs from "fs";

/**
 * Applica la funzione `f` a tutti gli elementi dell'array `xs`.
 *
 * Esempio:
 *   mappa((x) => x * 2, [1, 2, 3, 4]) ==> [2, 4, 6, 8]
 *   mappa(() => 0, [1, 2, 3, 4]) ==> [0, 0, 0, 0]
 */
export function mappa<T, U>(f: (x: T) => U, xs: T[]) {
  return xs.map(f);
}

/**
 * Applica la funzione `p` a tutti gli elementi `x` dell'array `xs`
 * e mantiene solo quelli tali per cui `p(x)` è `true`.
 *
 * Esempio:
 *   filtra((x) => x > 2, [1, 2, 3, 4]) ==> [3, 4]
 *   filtra(() => false, [1, 2, 3, 4]) ==> []
 */
export function filtra<T, U>(p: (x: T) => boolean, xs: T[]) {
  return xs.filter(p);
}

/**
 * Separa la string `s` rispettivamente al/ai caratteri `x`
 * e restituisce la stringa separata in un array.
 *
 * Esempio:
 *   splitta("ciao mondo", " ") ==> ["ciao", "mondo"]
 *   splitta("ciao mondo", "o") ==> ["cia", " m", "nd", ""]
 *   splitta("tizio,caio", ",") ==> ["tizio", "caio"]
 */
export function splitta(s: string, x: string): string[] {
  return s.split(x);
}

/**
 * Unisce due array `xs` e `ys` mettendo `ys` alla fine di `xs`.
 *
 * Esempio:
 *   unisci([1, 2], [])     ==> [1, 2]
 *   unisci([], [3, 4])     ==> [3, 4]
 *   unisci([1, 2], [3, 4]) ==> [1, 2, 3, 4]
 */
export function unisci<T>(xs: T[], ys: T[]) {
  return xs.concat(ys);
}

/**
 * Converte una stringa ad un numero.
 *
 * Esempio:
 *   toInt("1") ==> 1
 *   toInt("123") ==> 123
 *   toInt("0.52") ==> 0
 *   toInt("aaa") ==> NaN  // Not a Number
 */
export function toInt(x: string): number {
  return Number.parseInt(x);
}

/**
 * Converte una stringa ad una data.
 *
 * Esempio:
 *   toDate("2021-02-14T14:22:05.565Z") ==> Sun Feb 14 2021 15:22:05 GMT+0100 (Central European Standard Time" rappresentata internamente come data
 *   toDate("abc") ==> invalid date
 */
export function toData(x: string): Date {
  return new Date(x);
}

/**
 * Legge i log dal file `logs.txt` e ne restituisce il contenuto
 * come stringa.
 */
export function leggiLog() {
  return fs.readFileSync("logs.txt", "utf-8");
}
