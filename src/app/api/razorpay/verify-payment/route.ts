import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required payment details' },
        { status: 400 }
      );
    }

    // Verify payment signature
    const key_secret = process.env.RAZORPAY_KEY_SECRET!;
    
    if (!key_secret) {
      console.error('RAZORPAY_KEY_SECRET is not configured');
      return NextResponse.json(
        { error: 'Payment verification configuration error' },
        { status: 500 }
      );
    }

    // Generate expected signature
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    // Compare signatures
    const isValid = generated_signature === razorpay_signature;

    if (isValid) {
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
      });
    } else {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid payment signature' 
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
