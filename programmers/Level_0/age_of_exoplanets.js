function solution(age) {
  return String(age)
    .split("")
    .map((s) => String.fromCharCode(Number(s) + 97))
    .join("");
}
