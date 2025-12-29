'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types';

interface CartItem extends Product {
  quantity: number;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  totalAmount: number;
  createdAt: string;
}

interface OrderContextType {
  currentOrder: Order | null;
  createOrder: (items: CartItem[], customerInfo: CustomerInfo, totalAmount: number) => string;
  getOrder: (orderId: string) => Order | null;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load order from localStorage on mount
  useEffect(() => {
    const savedOrder = localStorage.getItem('currentOrder');
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder);
        // Check if order is less than 24 hours old
        const orderAge = Date.now() - new Date(order.createdAt).getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (orderAge < twentyFourHours) {
          setCurrentOrder(order);
        } else {
          // Order expired, clear it
          localStorage.removeItem('currentOrder');
        }
      } catch (e) {
        console.error("Failed to parse order from local storage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save order to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      if (currentOrder) {
        localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
      } else {
        localStorage.removeItem('currentOrder');
      }
    }
  }, [currentOrder, isLoaded]);

  const createOrder = (items: CartItem[], customerInfo: CustomerInfo, totalAmount: number): string => {
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const order: Order = {
      id: orderId,
      items,
      customerInfo,
      totalAmount,
      createdAt: new Date().toISOString(),
    };
    setCurrentOrder(order);
    return orderId;
  };

  const getOrder = (orderId: string): Order | null => {
    if (currentOrder && currentOrder.id === orderId) {
      return currentOrder;
    }
    return null;
  };

  const clearOrder = () => {
    setCurrentOrder(null);
  };

  return (
    <OrderContext.Provider value={{ currentOrder, createOrder, getOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within an OrderProvider');
  return context;
};
