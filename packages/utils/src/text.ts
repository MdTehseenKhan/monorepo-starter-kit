export function stripHtml(htmlString: string): string {
  return htmlString
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

export function capitalize(value: string): string {
  return value?.slice(0, 1)?.toUpperCase() + value?.slice(1)?.toLowerCase();
}

export function capitalizeWords(input: string): string {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function pluralize(word: string): string {
  // General rules for pluralization
  if (word.endsWith('y') && !/[aeiou]y$/.test(word)) {
    // Words ending in consonant + y
    return word.slice(0, -1) + 'ies';
  }

  if (
    word.endsWith('s') ||
    word.endsWith('sh') ||
    word.endsWith('ch') ||
    word.endsWith('x') ||
    word.endsWith('z')
  ) {
    // Words ending in s, sh, ch, x, z
    return word + 'es';
  }

  if (word.endsWith('f') || word.endsWith('fe')) {
    // Words ending in f or fe
    return word.replace(/fe?$/, 'ves');
  }

  // Default rule: add 's'
  return word + 's';
}
