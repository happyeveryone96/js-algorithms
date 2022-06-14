function isValid(s) {
  const stack = [];

  for (b of s) {
    const lastBracket = stack[stack.length - 1];
    if (b === ")" && lastBracket === "(") {
      stack.pop();
    } else if (b === "]" && lastBracket === "[") {
      stack.pop();
    } else if (b === "}" && lastBracket === "{") {
      stack.pop();
    } else {
      stack.push(b);
    }
  }

  return stack.length === 0 ? true : false;
}
