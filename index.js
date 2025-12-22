function knightMoves(start, target) {
 
  // create a queue array to store each coordinates
  let queue = []
  queue.push(start)

  const playedMoves = []
  //create a an array that stores the predecessors
  playedMoves.push(start)
  
  const predecessors = {}

  const lastCoordinates = []


  // create a while loop that runs till the quque is empty or if target is reached
  while( queue.length > 0) {
    let front = queue.shift()
    const validMoves = findValidMoves(front)
    console.log(validMoves, "valid moves");
    
    let targetFound = false

      // console.log(uniqueMoves, "scsdf");
      
        for(let i = 0; i<validMoves.length; i++) {
          // console.log(playedMoves[count], "jinka");
          let duplicateFound = false
          console.log(playedMoves);
          
          for(let j = 0; j<playedMoves.length; j++) {
            if(playedMoves[j][0] === validMoves[i][0] && playedMoves[j][1] === validMoves[i][1]){
              duplicateFound = true
              break
            }  
            
          }
           
          if(!duplicateFound) {
            console.log(playedMoves, 'played');
            let childX= validMoves[i][0]
            let childY= validMoves[i][1]
            let combo = JSON.stringify(childX)+","+JSON.stringify(childY)
            
            if(validMoves[i][0] === target[0] && validMoves[i][1] === target[1]){
                targetFound = true;
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
    
     
    if(targetFound) {
      break
    }
   
  }
 
  // console.log(lastCoordinates, "last");

  // let path = [target]
  
  // let currCoordinate = target
  // let count = 0
  // while(currCoordinate[0]!== start[0] && currCoordinate[1] !== start[1]) {
   
  //   if(predecessors[count][1][0] === currCoordinate[0] && predecessors[count][1][1] === currCoordinate[1]){
  //     path.push(predecessors[count][0])
  //     currCoordinate = predecessors[count][0]
  //     count = 0
  //     continue
  //   }
  //   count++
  // }

  // console.log(path.reverse(), "sdfsf");
  
  
  return predecessors
}


function findValidMoves (arr) {
  const x = arr[0]
  const y = arr[1]
  let nextMoves = [[x-2, y+1], [x-2, y-1], [x+1, y+2], [x+1, y+2], [x+2,y+1], [x+2, y-1], [x-1, y-2], [x-1, y+2]]
  
  return nextMoves.filter(move => move[0] >-1 && move[0]<8  && move[1] > -1 && move[1] < 8 )

  
}

function checkDuplicates (playedMoves, validMoves) {
  const playedToString = playedMoves.map(move => JSON.stringify(move))
  const validToString = validMoves.map(move => JSON.stringify(move))
  
  let uniqueValidMoves = validToString.filter(move => !playedToString.includes(move))
  return uniqueValidMoves.map(move => JSON.parse(move))
}


console.log(knightMoves([0,0],[7,7]))

// console.log(checkDuplicates([[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]], [[1,1], [6,3], [6,6]]));

