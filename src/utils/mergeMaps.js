const mergeMaps = (map1, map2) => {
  const newMap = new Map();
  map1.forEach((val, key) => newMap.set(key, val));
  map2.forEach((val, key) => newMap.set(key, val));
  return newMap;
};
export default mergeMaps;
