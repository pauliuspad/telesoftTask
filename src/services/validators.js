const validation = (number, minValue, maxValue) => {
  if (number < minValue) {
    return minValue;
  } else if (number > maxValue) {
    return maxValue;
  }
  return number;
};

export { validation };
