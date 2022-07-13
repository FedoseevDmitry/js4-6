const getAverageValue = (arr) => {
  let checkSum = 0;

  for (let i = 0; i < arr.length; i++) {
    checkSum += arr[i];
  };
  
  const averageCheck = checkSum / arr.length;

  return Math.floor(averageCheck);
};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(`Средний чек за день: ${getAverageValue(allCashbox)}`);