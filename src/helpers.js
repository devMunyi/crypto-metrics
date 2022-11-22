/* eslint-disable */
const truncateNum = (number, decimals) => {
  // set power variable of decimals to base 10
  const power = Math.pow(10, decimals);

  // check if the number is greater than 0
  if (number > 0) {
    // return truncated number using Math.floor()
    return Math.floor(number * power) / power;
  }
  // return truncated number using Math.ceil()
  return Math.ceil(number * power) / power;
};

export default truncateNum;
