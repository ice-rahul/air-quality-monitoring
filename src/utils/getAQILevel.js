import AQI_LEVEL from 'constants/index';

const getAQILevel = (AQI) => {
  let result = null;
  AQI_LEVEL.some((val) => {
    if (val.min <= Math.ceil(AQI) && val.max >= Math.ceil(AQI)) {
      result = val;
      return true;
    }
    return false;
  });
  return result;
};
export default getAQILevel;
