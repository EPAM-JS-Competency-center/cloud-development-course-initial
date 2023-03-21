import { ShippingInfo } from '../../cart/shipping-info.interface';

export enum OrderStatus {
  open = 'open',
  approved = 'approved',
  confirmed = 'confirmed',
  sent = 'sent',
  completed = 'completed',
  cancelled = 'cancelled',
}

export interface StatusHistory {
  status: OrderStatus;
  timestamp: string;
  comment: string;
}

export interface Order {
  id?: string;
  address: ShippingInfo;
  items: unknown[]; // TODO: find exact
  statusHistory: StatusHistory[];
}
