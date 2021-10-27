function solution(phone_number) {
    var answer;
    let result = [];
    
    let len = phone_number.length;
    for (let i=0; i<len; i++) {
        if (i < len-4) {
            result.push('*')
        } else {
            result.push(phone_number[i]);
        }
    }
    answer = result.join("");
    return answer;
}
