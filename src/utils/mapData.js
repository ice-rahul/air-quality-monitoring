const mapData = (inputArray) => {
  const mappedData = new Map();
  if (inputArray) {
    inputArray.forEach((val) => {
      mappedData.set(val.city, val.aqi);
    });
  }
  return mappedData;
};

export default mapData;
