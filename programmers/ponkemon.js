function solution(nums) {
    var answer = 0;
    let numbers = new Set(nums);
    let numArray = [...numbers];
    if ((nums.length) / 2 > numArray.length) {
        answer += numArray.length;
    } else {
        answer += (nums.length) / 2;
    }
    return answer;
}
