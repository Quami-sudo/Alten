import { signalStore, withState } from '@ngrx/signals';
import { withProductsMethods } from './shopping-methods';
import { ShoppingItem } from '../data-access/shopping-item.model';

export type ShopppingState = {
  shoppingItems: ShoppingItem[];
};

const initialState: ShopppingState = {
  shoppingItems: [],
};

export const ProductStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProductsMethods(),
);
