export function adjustHeadingLevel(text: string, adjustment: number): string {
  const headingRegex = /^(#+)/;
  const lines = text.split('\n');
  const adjustedLines = lines.map(line => {
    const match = line.match(headingRegex);
    if (match) {
      const currentLevel = match[1].length;
      const newLevel = Math.max(1, Math.min(6, currentLevel + adjustment));
      return line.replace(headingRegex, '#'.repeat(newLevel));
    }
    return line;
  });
  return adjustedLines.join('\n');
}