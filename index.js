const formatDate = (timeInSeconds) => {
  const x = Number(timeInSeconds);
  let h = Math.floor(x / 3600);
  let m = Math.floor(x % 3600 / 60);
  let s = Math.floor(x % 3600 % 60);

  const hResult = h <= 0 ? '' : (h + 'h ');
  const mResult = m <= 0 ? '' : (m + 'm ');
  const sResult = s <= 0 ? '' : (s + 's');

  let result = '';

   if (timeInSeconds === undefined) {
     result = '0s';
   } else if (sResult === 0) {
      result = (hResult + mResult);
  } else if (mResult === 0) {
    result = (hResult + sResult);
  } else if (hResult === 0) {
    result = (mResult +  sResult);
  } else {
    result =  (hResult +  mResult +  sResult);
  }
  return result;
}

module.exports = formatDate;
