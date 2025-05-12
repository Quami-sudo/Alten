import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { ChangeDetectorRef, inject } from '@angular/core';
import { ProductsService } from '../data-access/products.service';
import { Product } from '../data-access/product.model';
import { ShopppingState } from './shopping-state';

export function withProductsMethods() {
  return signalStoreFeature(
    withState<ShopppingState>({shoppingItems: []}),
    withMethods((store) => {
      const productsService = inject(ProductsService);
      return {
        addProduct(product: Product){
          const items = structuredClone(store.shoppingItems());
          const searchedItem = items.find(item => item.id === product.id);
          (searchedItem) ? searchedItem.numberOfItem ++ : items.push({...product, numberOfItem: 1});
          patchState(store, {shoppingItems: [...items]});
        },

        removeProduct(productId: number){
          const items = structuredClone(store.shoppingItems());
          const index = items.findIndex(item => item.id === productId);
          if(index === -1) return;

          const item = items[index];
          (item.numberOfItem > 1) ? item.numberOfItem -- : items.splice(index, 1);
          patchState(store, {shoppingItems: [...items]});
        },

        isProductInList(productId: number): boolean{
          return store.shoppingItems().findIndex(item => item.id === productId) > -1;
        }
      };
    })
  );
}
