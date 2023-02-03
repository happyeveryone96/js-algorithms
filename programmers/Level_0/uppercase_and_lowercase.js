function solution(my_string) {
  const filter = (s) => {
    if (s === s.toLowerCase(s)) return s.toUpperCase(s);
    else if (s === s.toUpperCase(s)) return s.toLowerCase(s);
  };
  return my_string
    .split("")
    .map((s) => filter(s))
    .join("");
}
