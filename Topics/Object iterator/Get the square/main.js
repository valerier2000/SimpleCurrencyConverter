function getTheSquare(arrayOfObjects) {
  arrayOfObjects.forEach((value) => {
    value.square = Math.sqrt(value.source);
  });
  return arrayOfObjects;
}
