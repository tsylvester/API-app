// src/types/subscription.types.ts
export interface SubscriptionPlan {
  id: string;
  priceId: string;
  stripePriceId: string;
  name: string;
  description: string | null;
  amount: number;
  currency: string;
  interval: string;
  intervalCount: number;
  features?: string[];
  metadata?: Record<string, any>;
}

export interface UserSubscription {
  id: string | null;
  userId: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  status: SubscriptionStatus;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  plan: SubscriptionPlan | null;
}

export type SubscriptionStatus = 
  | 'free'
  | 'active'
  | 'past_due'
  | 'unpaid'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'trialing';

export interface SubscriptionTransaction {
  id: string;
  userId: string;
  subscriptionId: string | null;
  stripeInvoiceId: string | null;
  stripePaymentIntentId: string | null;
  amount: number;
  currency: string;
  status: TransactionStatus;
  created_at: string;
}

export type TransactionStatus = 
  | 'succeeded'
  | 'processing'
  | 'requires_payment_method'
  | 'requires_action'
  | 'canceled'
  | 'failed';

/**
 * API endpoint request/response types
 */
export interface SubscriptionUsageMetrics {
  current: number;
  limit: number;
  reset_date?: string | null;
}

export interface CancelSubscriptionRequest {
  subscriptionId: string;
}

export interface ResumeSubscriptionRequest {
  subscriptionId: string;
}