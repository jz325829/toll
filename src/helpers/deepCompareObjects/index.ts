/* eslint-disable import/prefer-default-export */
function deepCompareObjects<T>(obj1: T, obj2: T): boolean {
  const jsonObj1 = JSON.stringify(obj1);
  const jsonObj2 = JSON.stringify(obj2);

  return jsonObj1 === jsonObj2;
}

export { deepCompareObjects };
