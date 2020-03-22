
exports.min = function min (array) {
  if (!array || array.length==0) return 0;
  let min=array[0];
  for (let i=1;i<array.length;i++){
    min=min>array[i]?array[i]:min;
  }
  return min;
}

exports.max = function max (array) {
  if (!array || array.length==0) return 0;
  let max=array[0];
  for (let i=1;i<array.length;i++){
    max=max<array[i]?array[i]:max;
  }
  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length==0) return 0;
  let avg=0;
  for(let i=0;i<array.length;i++){
    avg+=array[i];
  }
  return avg/array.length;
}
