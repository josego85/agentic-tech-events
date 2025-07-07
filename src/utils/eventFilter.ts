function extractEventDate(text: string): Date | null {
  const regex = /(\d{1,2})\s?(?:th|st|nd|rd)?\s?(?:of\s)?July\s?,?\s?2025|\bJuly\s?(\d{1,2}),?\s?2025/gi;
  const match = regex.exec(text);
  if (match) {
    const day = parseInt(match[1] || match[2]);
    if (!isNaN(day)) {
      return new Date(2025, 6, day); // July is month 6 (0-based)
    }
  }
  if (/July\s?2025/i.test(text)) {
    return new Date(2025, 6, 1);
  }
  return null;
}

export function filterFutureEvents(results: any[], today: Date): any[] {
  return results.filter((r: any) => {
    const date = extractEventDate(r.title + ' ' + r.snippet);
    return !date || date >= today;
  });
}