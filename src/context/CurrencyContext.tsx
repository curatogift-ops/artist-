'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY' | 'INR' | 'BRL' | 'MXN' | 'CNY';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convertPrice: (priceUsd: number) => string;
  rates: Record<string, number>;
  loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const SUPPORTED_CURRENCIES: Currency[] = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'INR', 'BRL', 'MXN', 'CNY'];

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    CAD: 1.35,
    AUD: 1.52,
    JPY: 150.5,
    INR: 83.5,
    BRL: 5.15,
    MXN: 17.5,
    CNY: 7.23
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const cached = localStorage.getItem('exchange_rates_v2'); // New key to force refresh
        const now = Date.now();
        
        // Cache for 1 hour (3600000 ms) to be more responsive
        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 3600000 && data.EUR) { // Simple validation check
                setRates(data);
                setLoading(false);
                return;
            }
        }

        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        
        setRates(data.rates);
        
        localStorage.setItem('exchange_rates_v2', JSON.stringify({
            timestamp: now,
            data: data.rates
        }));
      } catch (err) {
        console.error('Failed to fetch rates, using fallbacks', err);
        // Fallback rates already set in initial state
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    
    const savedCurrency = localStorage.getItem('preferred_currency');
    if (savedCurrency && SUPPORTED_CURRENCIES.includes(savedCurrency as Currency)) {
        setCurrency(savedCurrency as Currency);
    }
  }, []);

  const handleSetCurrency = (c: Currency) => {
      setCurrency(c);
      localStorage.setItem('preferred_currency', c);
  };

  const convertPrice = (priceUsd: number) => {
    if (currency === 'USD') return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceUsd);
    
    const rate = rates[currency];
    if (!rate) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceUsd);

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(priceUsd * rate);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, convertPrice, rates, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
