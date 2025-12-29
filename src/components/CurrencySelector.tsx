'use client';
import { useCurrency, Currency } from '@/context/CurrencyContext';

const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'INR', 'BRL', 'MXN', 'CNY'];

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="relative" suppressHydrationWarning>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        className="appearance-none bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 pr-8 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      >
        {currencies.map((c) => (
          <option key={c} value={c} className="text-black bg-white">
            {c}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs opacity-50">
        ▼
      </div>
    </div>
  );
}
