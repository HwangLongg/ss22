let numbers = [2, 7, 4, 9, 6];
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumEven += numbers[i];
  } else {
    sumOdd += numbers[i];
  }
}

alert(`Tổng các số chẵn: ${sumEven}`);
alert(`Tổng các số lẻ: ${sumOdd}`);
