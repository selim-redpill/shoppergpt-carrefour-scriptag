import { h } from 'preact';
import { EventRequirements } from '../../../types';
import { getCurrencyParts } from '../../../utils/currency';

interface Props {
  requirements: EventRequirements;
}

function CurrencyValue({ value, fallback = '—' }: { value: number | undefined; fallback?: string }) {
  const parts = getCurrencyParts(value);
  if (!parts) {
    return (
      <span class="inline-flex items-end gap-0.5 tabular-nums">
        <span class="text-[14px] md:text-[15px] font-semibold leading-none">{fallback}</span>
        <span class="text-[9px] md:text-[10px] font-semibold leading-none pb-[1px]">€</span>
      </span>
    );
  }

  return (
    <span class="inline-flex items-end gap-0.5 tabular-nums">
      <span class="text-[14px] md:text-[15px] font-semibold leading-none">{parts.whole}</span>
      <span class="text-[10px] md:text-[11px] font-semibold leading-none pb-[1px]">,{parts.fraction}</span>
      <span class="text-[9px] md:text-[10px] font-semibold leading-none pb-[1px]">€</span>
    </span>
  );
}

const CATEGORIES = [
  {
    label: 'Apéritifs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <path d="M8 22V12M16 22V12M5 2h14l-3 10H8L5 2z" />
      </svg>
    )
  },
  {
    label: 'Entrées',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l2 2" />
      </svg>
    )
  },
  {
    label: 'Plats',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <path d="M3 12h18M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9" />
        <path d="M12 3v4M8 5l1.5 2M16 5l-1.5 2" />
      </svg>
    )
  },
  {
    label: 'Fromages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <path d="M3 18L12 6l9 12H3z" />
        <circle cx="15" cy="13" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: 'Desserts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <path d="M12 3C8 3 4 6 4 10h16c0-4-4-7-8-7z" />
        <rect x="3" y="10" width="18" height="3" rx="1.5" />
        <path d="M5 13v6a1 1 0 001 1h12a1 1 0 001-1v-6" />
      </svg>
    )
  },
  {
    label: 'Boissons',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
        <path d="M5 2h14l-2 8H7L5 2z" />
        <path d="M7 10v9a1 1 0 001 1h8a1 1 0 001-1v-9" />
      </svg>
    )
  }
];

export function EventRequirementsPanel({ requirements }: Props) {
  const adults = requirements.guests_adults;
  const kids = requirements.guests_kids;
  const totalGuests = (adults ?? 0) + (kids ?? 0);
  const costTotal = 0;
  const pricePerPerson = totalGuests > 0 ? costTotal / totalGuests : undefined;

  return (
    <div class="flex-1 min-h-0 flex flex-col overflow-hidden">
      <div class="flex-1 overflow-y-auto bg-[#FAF9F7] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] flex items-center justify-center">
        <div class="text-center px-6 py-10">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-[#F4EFE5] flex items-center justify-center text-[#C7B287]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
              <path d="M3 12h18M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9" />
              <path d="M12 3v4M8 5l1.5 2M16 5l-1.5 2" />
            </svg>
          </div>
          <p class="m-0 text-sm text-[#9A8C78] leading-relaxed max-w-[220px] mx-auto">
            Les produits de votre menu apparaîtront ici une fois sélectionnés.
          </p>
        </div>
      </div>

      <div class="border-t border-[#E8ECF0] bg-white shrink-0">
        <div class="flex items-stretch overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map(cat => (
            <button
              key={cat.label}
              class="flex-1 min-w-[60px] flex flex-col items-center gap-1 py-3 px-1 border-0 bg-transparent text-[#B0A898] cursor-pointer hover:text-[#C7B287] transition-colors"
            >
              {cat.icon}
              <span class="text-[9px] md:text-[10px] uppercase tracking-wide font-semibold leading-none">
                {cat.label}
              </span>
            </button>
          ))}
          <button class="shrink-0 flex flex-col items-center justify-center gap-1 py-3 px-3 border-0 bg-transparent text-[#C9C0B0] cursor-not-allowed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22">
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span class="text-[9px] md:text-[10px] uppercase tracking-wide font-semibold leading-none text-center max-w-[50px]">
              Liste courses
            </span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-[1.3fr_1fr] border-t border-[#E8ECF0] shadow-[0_-4px_14px_rgba(17,24,39,0.07)] shrink-0">
        <div class="bg-[#F3F1EE] px-4 py-3 md:px-5 md:py-3.5 flex flex-col gap-2.5">
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-[#8A8070] shrink-0">
              Nombre de convives
            </span>
            <span class="text-[12px] md:text-[13px] font-semibold text-[#8D7A4E] text-right">
              <span class="text-[15px] md:text-[16px] font-bold">{adults ?? '—'}</span> adultes{' '}
              <span class="text-[15px] md:text-[16px] font-bold">{kids ?? '—'}</span> enfants
            </span>
          </div>
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-[#8A8070] shrink-0">
              Prix par personne
            </span>
            <span class="text-[#8D7A4E]">
              <CurrencyValue value={pricePerPerson} fallback="—" />
            </span>
          </div>
        </div>

        <div class="bg-[#C7B287] text-white px-4 py-3 md:px-5 md:py-3.5 flex flex-col gap-2.5">
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-[#F7F2E6] shrink-0">
              Budget
            </span>
            <span class="text-white">
              <CurrencyValue value={requirements.budget} fallback="—" />
            </span>
          </div>
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-[#F7F2E6] shrink-0">
              Coût total
            </span>
            <span class="text-white">
              <CurrencyValue value={costTotal} fallback="—" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
