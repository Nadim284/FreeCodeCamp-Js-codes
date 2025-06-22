function mutation(arr) {
  const toLowerFirstArr = arr[0].toLowerCase();
  const toLowerSecondArr = arr[1].toLowerCase();

  for (let char of toLowerSecondArr) {
    if (!toLowerFirstArr.includes(char)) {
      return false;
    }
  }
  return true;
}
