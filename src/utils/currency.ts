export interface CurrencyParts {
  whole: string;
  fraction: string;
}

export function getCurrencyParts(value: number | undefined): CurrencyParts | null {
  if (value === undefined) return null;

  const parts = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(value);

  let whole = '';
  let fraction = '00';

  for (const part of parts) {
    if (part.type === 'integer' || part.type === 'group') {
      whole += part.value;
    }
    if (part.type === 'fraction') {
      fraction = part.value;
    }
  }

  return { whole, fraction };
}
