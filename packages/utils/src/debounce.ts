export function debounce<Args extends unknown[], R>(
  fn: (...args: Args) => R,
  delay = 500
): (this: ThisParameterType<typeof fn>, ...args: Args) => void {
  let timer: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<typeof fn>, ...args: Args): void {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
