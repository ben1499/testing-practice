function analyzeArray(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const length = array.length;

  const sum = array.reduce((acc, value) => acc + value, 0);

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyzeArray;