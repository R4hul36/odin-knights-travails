function knightMoves(start, target) {
  const queue = [start]
  const visitedSquares = [start]
  const predecessors = {}

  // create a while loop that runs till the queue is empty or if target is reached
  while (queue.length > 0) {
    let front = queue.shift()
    const validMoves = findValidMoves(front)
    let targetFound = false

  
    for (move of validMoves) {
      let duplicateFound = false
      for (square of visitedSquares) {
        // check if the current move is already present in the visited list, if so mark it as a duplicate
        if (
          square[0] === move[0] &&
          square[1] === move[1]
        ) {
          duplicateFound = true
          break
        }
      }

      // if no duplicates are found push the current move to the visited array and break the loop if the target square is reached
      if (!duplicateFound) {
        let moveToString =
          JSON.stringify(move[0]) +
          ',' +
          JSON.stringify(move[1])

        if (move[0] === target[0] && move[1] === target[1]) {
          targetFound = true
          predecessors[moveToString] = front
          visitedSquares.push(move)
          queue.push(move)
          break
        }
        visitedSquares.push(move)
        queue.push(move)
        predecessors[moveToString] = front
      }
    }
    if (targetFound) {
      break
    }
  }
  let shortestPath = [target]
  let node = String(target)

  while (node !== String(start)) {
    shortestPath.push(predecessors[node])
    node = String(predecessors[node])
  }
  console.log(`You made it in ${shortestPath.length} moves!  Here's your path: `);
  for(let i = shortestPath.length-1; i>=0; i--){
    console.log(shortestPath[i]) 
  }
}

function findValidMoves(arr) {
  const x = arr[0]
  const y = arr[1]
  let nextMoves = [
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
  ]

  return nextMoves.filter(
    (move) => move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8
  )
}

knightMoves([0, 0], [7,7])
