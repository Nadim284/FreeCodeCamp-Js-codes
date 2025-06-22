function frankenSplice(arr1, arr2, index) {
  let newArr = [];

  let addValue = arr2.slice(0, index);
  let addValue2 = arr2.slice(index);

// Use spread operator so all arrays become one array

  newArr.push(...addValue);
  newArr.push(...arr1);
  newArr.push(...addValue2);

  return newArr;
}
