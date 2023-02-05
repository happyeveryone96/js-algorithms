function solution(rsp) {
  const win = (hand) => {
    if (hand === "2") {
      return "0";
    } else if (hand === "0") {
      return "5";
    } else if (hand === "5") {
      return "2";
    }
  };

  return rsp
    .split("")
    .map((e) => win(e))
    .join("");
}
