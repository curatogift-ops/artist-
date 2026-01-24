import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';


export async function POST(request: NextRequest) {
  try {
    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
        return NextResponse.json(
            { error: 'Razorpay configuration missing' },
            { status: 500 }
        );
    }

    const razorpay = new Razorpay({
        key_id,
        key_secret,
    });
    
    const body = await request.json();
    const { amount, currency = 'INR', receipt } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    // Amount should be in paise (smallest currency unit)
    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1, // Auto capture payment
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create order' },
      { status: 500 }
    );
  }
}
