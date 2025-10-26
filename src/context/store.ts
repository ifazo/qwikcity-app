import { createContextId } from '@builder.io/qwik';
import { User } from 'firebase/auth';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface AppStore {
  user: User | null;
  cart: CartItem[];
}

export const AppContext = createContextId<AppStore>('app.context');
