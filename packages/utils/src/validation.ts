export function isEmpty<T>(value: T): boolean {
  if (value) {
    return false;
  }
  return true;
}

export function isEmptyList<T>(list: T[] | null | undefined): boolean {
  return !list?.length;
}

type ObjectType = Record<string, unknown>;

export function objectsEqual<T extends ObjectType>(
  firstObject: T,
  secondObject: T
): boolean {
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

    if (
      !objectsEqual(
        firstObject[key] as ObjectType,
        secondObject[key] as ObjectType
      )
    ) {
      return false;
    }
  }

  return true;
}
