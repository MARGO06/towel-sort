
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let result=[]
 if(matrix===undefined){
    return result
 }
 if(matrix.length==2){
    matrix[1].reverse()
    result=[].concat(matrix[0],matrix[1])
    return result}
 else if(matrix.length==3){
  matrix[1].reverse()
  result=[].concat(matrix[0],matrix[1],matrix[2])
  return result
}else if(matrix.length==4){
    matrix[1].reverse()
    matrix[3].reverse()
    result=[].concat(matrix[0],matrix[1],matrix[2],matrix[3])
    return result
}return result
}


 
 

