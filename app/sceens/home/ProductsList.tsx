import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import ProductsListView from '@/app/components/ProductsListView';
import { ScreenWrapperNoScroll } from '@/app/components/ScreenWrapper';
import Space from '@/app/components/Space';
import { ProductState } from '@/app/state/types';
import { FilterSvg } from '@/assets/icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export type ProductsListProps = {
  readonly onBackToLogin: () => void;
  readonly productState: ProductState;
  readonly dispatchProductAction: React.Dispatch<any>;
};

export default function ProductsList({
  onBackToLogin,
  productState,
  dispatchProductAction,
}: ProductsListProps) {
  return (
    <ScreenWrapperNoScroll>
      <Space height={16} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onBackToLogin}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={24}
            color="#54634B"
          />
          <Label>{'Back'}</Label>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onBackToLogin}
        >
          <Label style={{ marginEnd: 8 }}>{'Filter'}</Label>
          <FilterSvg color={'#54634B'} />
        </TouchableOpacity>
      </View>
      <Space height={32} />

      <Label varient="screen-heading">{'Meat'}</Label>
      <Divider varient="big" />
      <Space height={32} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 40 }}
      >
        {productState.categories.map((category, index) => (
          <TouchableOpacity style={{ marginEnd: 24 }} key={category.id}>
            <Label style={{ fontWeight: category.selected ? 800 : 400 }}>
              {category.name}
            </Label>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Space height={32} />
      <Label style={{ fontSize: 12 }}>{'Based on your selection'}</Label>
      <Space height={8} />

      <Label style={{ fontWeight: 700, fontSize: 30 }}>{'Our products'}</Label>

      <ProductsListView
        products={productState.products}
        addItemToCard={(id: string) => {
          dispatchProductAction({ type: 'ADD_ITEM', payload: id });
        }}
        removeItemFromCard={(id: string) => {
          dispatchProductAction({ type: 'REMOVE_ITEM', payload: id });
        }}
      />
    </ScreenWrapperNoScroll>
  );
}
