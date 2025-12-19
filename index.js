function knightMoves(start, target) {
  // pseudo code
  // create a queue array to store each coordinates
  let queue = []
  queue.push(start)
  //create a an array that stores the predecessors
  const validMoves = []

  // create a while loop that runs till the quque is empty or if target is reached
  while(queue.length > 0) {
    const front = queue.shift()
    const validMoves = findValidMoves(front)

  }

  return start
}

function findValidMoves (arr) {
  console.log(arr, "sf")
}

console.log(knightMoves([0, 0], [1, 2]))
