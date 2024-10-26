export function isEmpty<T>(value: T): boolean {
  if (value) {
    return false;
  }
  return true;
}

export function isEmptyList<T>(list: T[] | null | undefined): boolean {
  return !list?.length;
}

// biome-ignore lint/suspicious/noExplicitAny: We are not certain about the types of the objects.
export const objectsEqual = (firstObject: any, secondObject: any): boolean => {
  if (firstObject === secondObject) {
    return true;
  }

  if (
    typeof firstObject !== 'object' ||
    typeof secondObject !== 'object' ||
    firstObject === null ||
    secondObject === null
  ) {
    return false;
  }

  if (firstObject instanceof Date && secondObject instanceof Date) {
    return firstObject.getTime() === secondObject.getTime();
  }

  if (firstObject instanceof Date || secondObject instanceof Date) {
    return false;
  }

  const keys1 = Object.keys(firstObject);
  const keys2 = Object.keys(secondObject);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!objectsEqual(firstObject[key], secondObject[key])) {
      return false;
    }
  }

  return true;
};
