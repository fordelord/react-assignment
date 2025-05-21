export const getSplitNumbers = (value: string): string[] => {
  return value.split('');
};

export const calculateArithmeticMean = (value: string): string => {
  const splitNumbers = getSplitNumbers(value);

  const numbersSum = splitNumbers.reduce((previousValue, currentValue) => {
    return previousValue + Number(currentValue);
  }, 0);

  return (numbersSum / splitNumbers.length).toFixed(2);
};

export const getLowestNumber = (value: string): number => {
  const splitNumbers = getSplitNumbers(value);

  const convertedNumbers = splitNumbers.map((number) => Number(number));

  return Math.min(...convertedNumbers);
};

export const getHighestNumber = (value: string): number => {
  const splitNumbers = getSplitNumbers(value);

  const convertedNumbers = splitNumbers.map((number) => Number(number));

  return Math.max(...convertedNumbers);
};
