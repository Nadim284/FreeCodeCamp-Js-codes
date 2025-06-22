function chunkArrayInGroups(arr,num){

  let newArr = [];

  for(let i=0;i<arr.length;i+=num){
    let addValue = arr.slice(i,i+num);
    newArr.push(addValue);
  }
  return newArr;
}
