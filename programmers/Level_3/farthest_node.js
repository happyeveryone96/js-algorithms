// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

// 1. shift를 이용한 방법
function solution(n, edge) {
  const graph = Array.from(Array(n+1), () => []);
  
  for (const [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src);
  }
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;
  // BFS
  const queue = [1];
  while (queue.length > 0) {
      const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해준다.
      for (const dest of graph[src]) {
          if (distance[dest] === 0) {
              queue.push(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}

// 2. 큐를 이용한 방법
class Queue {
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  enqueue(value) {
      this.queue[this.rear++] = value;
  }
  dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
  }
  isEmpty() {
      return this.rear === this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n+1), () => []);
  
  for (const [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src);
  }
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;
  
  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
      const src = queue.dequeue(); 
      for (const dest of graph[src]) {
          if (distance[dest] === 0) {
              queue.enqueue(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}