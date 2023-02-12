import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_test_51MJExjAhKQsNXTIGDXyeiuxO8STr1TD71e3uBDvSDfBE1uWA1PhEiWcMb6gCz779WgdJkocwuLQ0ZRXAAnCqml8s008vg1vmlN'
);
