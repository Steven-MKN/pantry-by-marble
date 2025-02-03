import { CartSmallSvg } from '@/assets/icons';
import { useMemo, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Product } from '../state/types';
import Label from './Label';
import Space from './Space';

export type ProductsListViewProps = {
  products: Product[];
  addItemToCard: (id: string) => void;
  removeItemFromCard: (id: string) => void;
};

export default function ProductsListView({
  products,
  addItemToCard,
  removeItemFromCard,
}: ProductsListViewProps) {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const standardCardWidth = useMemo(
    () => scrollViewWidth / 2 - 20,
    [scrollViewWidth]
  );

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <View
          key={item.id}
          style={{ width: standardCardWidth, overflow: 'hidden', margin: 8 }}
        >
          {/* For network images would probably use @georstat/react-native-image-cache */}
          <Image
            source={require('../../assets/images/image.png')}
            style={{
              resizeMode: 'cover',
              width: standardCardWidth,
              height: standardCardWidth,
            }}
          />
          <Space height={16} />

          <Label style={{ fontSize: 14, opacity: 0.4 }}>{item.name}</Label>
          <Space height={16} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Label style={{ fontWeight: 900 }}>{`R ${item.price}`}</Label>

            <TouchableOpacity
              onPress={() => {
                if (item.inCart) {
                  removeItemFromCard(item.id);
                } else {
                  addItemToCard(item.id);
                }
              }}
            >
              <CartSmallSvg
                color={item.inCart ? '#fff' : '#54634B'}
                fill={item.inCart ? '#54634B' : '#fff'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      onLayout={event => {
        const { width } = event.nativeEvent.layout;
        setScrollViewWidth(width);
      }}
    />
  );
}
