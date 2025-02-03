import { createContext } from 'react';
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
  filteredProducts: [],
  selectedCategories: ['beef', 'pork'],
  products: [
    // Beef (20 items)
    {
      id: '1',
      name: 'Wagyu Ribeye Steak',
      price: 349.99,
      image: 'image1.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '2',
      name: 'Rump Steak',
      price: 129.99,
      image: 'image2.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '3',
      name: 'Tomahawk Steak',
      price: 499.99,
      image: 'image3.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '4',
      name: 'Beef Tenderloin',
      price: 279.99,
      image: 'image4.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '5',
      name: 'Beef Brisket',
      price: 219.99,
      image: 'image5.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '6',
      name: 'Ground Beef',
      price: 99.99,
      image: 'image6.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '7',
      name: 'Beef Short Ribs',
      price: 199.99,
      image: 'image7.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '8',
      name: 'Flank Steak',
      price: 179.99,
      image: 'image8.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '9',
      name: 'Beef Striploin',
      price: 259.99,
      image: 'image9.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '10',
      name: 'Beef Skirt Steak',
      price: 189.99,
      image: 'image10.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '11',
      name: 'Beef T-Bone Steak',
      price: 329.99,
      image: 'image11.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '12',
      name: 'Beef Chuck Roast',
      price: 139.99,
      image: 'image12.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '13',
      name: 'Beef Top Sirloin',
      price: 209.99,
      image: 'image13.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '14',
      name: 'Beef Cheeks',
      price: 109.99,
      image: 'image14.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '15',
      name: 'Beef Oxtail',
      price: 159.99,
      image: 'image15.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '16',
      name: 'Beef Tri-Tip',
      price: 189.99,
      image: 'image16.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '17',
      name: 'Beef Prime Rib',
      price: 389.99,
      image: 'image17.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '18',
      name: 'Beef Rib Roast',
      price: 349.99,
      image: 'image18.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '19',
      name: 'Beef Flat Iron Steak',
      price: 199.99,
      image: 'image19.jpg',
      categoryId: 'beef',
      inCart: false,
    },
    {
      id: '20',
      name: 'Beef Ribs',
      price: 229.99,
      image: 'image20.jpg',
      categoryId: 'beef',
      inCart: false,
    },

    // Fish (10 items)
    {
      id: '21',
      name: 'Salmon Fillet',
      price: 249.99,
      image: 'image21.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '22',
      name: 'Tuna Steak',
      price: 299.99,
      image: 'image22.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '23',
      name: 'Tilapia Fillet',
      price: 129.99,
      image: 'image23.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '24',
      name: 'Mackerel',
      price: 139.99,
      image: 'image24.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '25',
      name: 'Cod Fillet',
      price: 189.99,
      image: 'image25.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '26',
      name: 'Haddock Fillet',
      price: 179.99,
      image: 'image26.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '27',
      name: 'Swordfish Steak',
      price: 349.99,
      image: 'image27.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '28',
      name: 'Sea Bass Fillet',
      price: 269.99,
      image: 'image28.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '29',
      name: 'Halibut Fillet',
      price: 329.99,
      image: 'image29.jpg',
      categoryId: 'fish',
      inCart: false,
    },
    {
      id: '30',
      name: 'Snapper Fillet',
      price: 219.99,
      image: 'image30.jpg',
      categoryId: 'fish',
      inCart: false,
    },

    // Pork (2 items)
    {
      id: '31',
      name: 'Pork Chops',
      price: 149.99,
      image: 'image31.jpg',
      categoryId: 'pork',
      inCart: false,
    },
    {
      id: '32',
      name: 'Pork Ribs',
      price: 179.99,
      image: 'image32.jpg',
      categoryId: 'pork',
      inCart: false,
    },

    // Poultry (8 items)
    {
      id: '33',
      name: 'Chicken Breast',
      price: 119.99,
      image: 'image33.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '34',
      name: 'Whole Chicken',
      price: 139.99,
      image: 'image34.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '35',
      name: 'Chicken Wings',
      price: 99.99,
      image: 'image35.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '36',
      name: 'Chicken Thighs',
      price: 109.99,
      image: 'image36.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '37',
      name: 'Turkey Breast',
      price: 199.99,
      image: 'image37.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '38',
      name: 'Duck Breast',
      price: 249.99,
      image: 'image38.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '39',
      name: 'Cornish Hen',
      price: 159.99,
      image: 'image39.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
    {
      id: '40',
      name: 'Chicken Drumsticks',
      price: 89.99,
      image: 'image40.jpg',
      categoryId: 'poultry',
      inCart: false,
    },
  ],
};

export const ProductContext = createContext(null);
