// 1. 등차수열인지 등비수열인지 확인
// 2-1 등차수열이면 마지막 값에 공차를 더해준 값을 return
// 2-2 등비수열이면 마지막 값에 공비를 곱해준 값을 return
function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + (common[1] - common[0]);
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}
