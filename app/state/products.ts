import { createContext } from 'react';
import { listOfApiProducts } from './listOfApiProducts';
import { ProductActions, ProductState } from './types';

export function productReducer(
  state: ProductState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case 'ADD_ITEM': {
      let cartItem = state.cart.items.find(it => it.itemId == action.payload);

      if (cartItem) {
        ++cartItem.count;
      } else {
        state.cart.items.push({
          itemId: action.payload,
          count: 1,
        });
      }
      let productItem = state.products.find(it => it.id == action.payload);
      if (productItem) {
        productItem.inCart = true;
      }

      adjustCalculations(state);

      return { ...state };
    }
    case 'REMOVE_ITEM': {
      let cartItem = state.cart.items.find(it => it.itemId == action.payload);

      if (!cartItem) {
        return state;
      }

      if (cartItem.count > 1) {
        --cartItem.count;
      } else {
        state.cart.items = state.cart.items.filter(
          it => it.itemId != action.payload
        );
      }

      let productItem = state.products.find(it => it.id == action.payload);
      if (productItem) {
        productItem.inCart = false;
      }

      adjustCalculations(state);

      return { ...state };
    }
    case 'CLEAR_ITEM': {
      let cartItem = state.cart.items.find(it => it.itemId == action.payload);

      if (!cartItem) {
        return state;
      }

      state.cart.items = state.cart.items.filter(
        it => it.itemId != action.payload
      );
      let productItem = state.products.find(it => it.id == action.payload);
      if (productItem) {
        productItem.inCart = false;
      }

      adjustCalculations(state);

      return { ...state };
    }
    case 'APPLY_PROMO_CODE': {
      state.promoCode = action.payload;

      if (action.payload == 'meat10') {
        state.cart.discount = 0.1;
      }

      adjustCalculations(state);

      return { ...state };
    }
    case 'REMOVE_PROMO_CODE': {
      state.cart.discount = 0;
      state.promoCode = '';

      adjustCalculations(state);

      return { ...state };
    }
    case 'FILTER_CATEGORY': {
      state.selectedCategories = action.payload;

      if (action.payload.includes('all')) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(p =>
          action.payload.includes(p.categoryId)
        );
      }

      return { ...state };
    }
    default:
      return state;
  }
}

function adjustCalculations(state: ProductState) {
  state.cart.subTotal = state.cart.items.reduce((acc, it) => {
    let product = state.products.find(p => p.id == it.itemId);
    if (product) {
      acc += product.price * it.count;
    }
    return acc;
  }, 0);

  state.cart.deliveryCharge = state.cart.subTotal > 50 ? 0 : 10;

  state.cart.total =
    (state.cart.subTotal + state.cart.deliveryCharge) *
    (1 - state.cart.discount);
}

export const initialProductState: ProductState = {
  categories: [
    { id: 'all', name: 'All', selected: false },
    { id: 'beef', name: 'Beef', selected: true },
    { id: 'fish', name: 'Fish', selected: false },
    { id: 'pork', name: 'Pork', selected: true },
    { id: 'poultry', name: 'Poultry', selected: false },
  ],
  cart: {
    items: [],
    discount: 0,
    deliveryCharge: 0,
    subTotal: 0,
    total: 0,
  },
  promoCode: '',
  filteredProducts: listOfApiProducts,
  selectedCategories: ['all'],
  products: listOfApiProducts
};

export const ProductContext = createContext(null);
