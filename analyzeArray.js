export default function analyzeArray(numArray) {
  const length = numArray.length;
  const sortedNums = numArray.sort();
  const avg = numArray.reduce((acc, cur) => (acc += cur), 0) / length;
  return {
    average: avg,
    min: sortedNums[0],
    max: sortedNums[length - 1],
    length: length,
  };
}
