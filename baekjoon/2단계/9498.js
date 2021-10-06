const fs = require('fs');
const input = fs.readFileSync('/dev/stdin')

const num = input

if (100 >= num && num >= 90) {
    console.log('A')
} else if (89 >= num && num >= 80) {
    console.log('B')
} else if (79 >= num && num >= 70) {
    console.log('C')
} else if (69 >= num && num >= 60) {
    console.log('D')
} else {
    console.log('F')
}


// 파이썬을 제외한 대부분의 언어는 90 <= num <= 100을 (90 <= num) <= 100으로 해석함
