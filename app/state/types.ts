// auth
export type AuthState = {
  loggedInState: 'logged-in' | 'logged-out' | 'not-initialized';
};

export type AuthActions = { type: 'LOGIN' } | { type: 'LOGOUT' };

// products
export type CategoryId = 'all' | 'beef' | 'fish' | 'pork' | 'poultry';

export type Category = {
  id: CategoryId;
  name: string;
  selected: boolean;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  categoryId: CategoryId;
  inCart: boolean;
};

export type CartItems = {
  itemId: string;
  count: number;
};

export type Cart = {
  items: CartItems[];
  discount: number;
  subTotal: number;
  deliveryCharge: number;
  total: number;
};

export type ProductState = {
  categories: Category[];
  products: Product[];
  filteredProducts: Product[];
  selectedCategories: CategoryId[];
  cart: Cart;
  promoCode: string;
};

export type ProductActions =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'APPLY_PROMO_CODE'; payload: string }
  | { type: 'REMOVE_PROMO_CODE' }
  | { type: 'CLEAR_ITEM'; payload: string }
  | { type: 'FILTER_CATEGORY'; payload: CategoryId[] };
