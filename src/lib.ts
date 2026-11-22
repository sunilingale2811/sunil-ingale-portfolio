export const toDate = (ym: string | null) => {
  if (!ym) return new Date();
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1, 1);
};

/** Whole months between two YYYY-MM values (inclusive of start month). */
export const monthsBetween = (start: string, end: string | null) => {
  const a = toDate(start);
  const b = toDate(end);
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
};

export const fmtDuration = (months: number) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo${m > 1 ? 's' : ''}` : ''].filter(Boolean).join(' ');
};

export const fmtMonth = (ym: string | null) =>
  ym ? toDate(ym).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : 'Present';

export const matches = (q: string, ...fields: (string | string[])[]) => {
  if (!q.trim()) return true;
  const hay = fields.flat().join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((t) => hay.includes(t));
};
