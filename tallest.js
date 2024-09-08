function getMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const height = [45, 54, 51, 52, 65, 65, 78, 100];
const max = getMax(height);
console.log(max);
