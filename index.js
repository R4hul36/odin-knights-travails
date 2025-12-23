function knightMoves(start, target) {
  const queue = []
  queue.push(start)
  const playedMoves = []
  playedMoves.push(start)
  const predecessors = {}

  // create a while loop that runs till the queue is empty or if target is reached
  while (queue.length > 0) {
    let front = queue.shift()
    const validMoves = findValidMoves(front)
    let targetFound = false

    for (let i = 0; i < validMoves.length; i++) {
      let duplicateFound = false
      for (let j = 0; j < playedMoves.length; j++) {
        if (
          playedMoves[j][0] === validMoves[i][0] &&
          playedMoves[j][1] === validMoves[i][1]
        ) {
          duplicateFound = true
          break
        }
      }

      if (!duplicateFound) {
        let combo =
          JSON.stringify(validMoves[i][0]) +
          ',' +
          JSON.stringify(validMoves[i][1])

        if (validMoves[i][0] === target[0] && validMoves[i][1] === target[1]) {
          targetFound = true
          predecessors[combo] = front
          playedMoves.push(validMoves[i])
          queue.push(validMoves[i])
          break
        }
        playedMoves.push(validMoves[i])
        queue.push(validMoves[i])
        predecessors[combo] = front
      }
    }
    if (targetFound) {
      break
    }
  }
  let shortestPath = []
  shortestPath.push(target)
  let node = String(target)

  while (node !== String(start)) {
    shortestPath.push(predecessors[node])
    node = String(predecessors[node])
  }

  return shortestPath.reverse()
}

function findValidMoves(arr) {
  const x = arr[0]
  const y = arr[1]
  let nextMoves = [
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
  ]

  return nextMoves.filter(
    (move) => move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8
  )
}

console.log(knightMoves([0, 0], [3, 3]))
