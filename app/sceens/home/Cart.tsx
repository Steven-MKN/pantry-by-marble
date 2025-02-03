import AppButton from '@/app/components/AppButton';
import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import { ScreenWrapperNoScroll } from '@/app/components/ScreenWrapper';
import Space from '@/app/components/Space';
import { ProductState } from '@/app/state/types';
import { AddSvg, LineSvg } from '@/assets/icons';
import { LessSvg } from '@/assets/icons/Less';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export type CartScreenProps = {
  readonly productState: ProductState;
  readonly dispatchProductAction: React.Dispatch<any>;
};

export default function Cart({
  productState,
  dispatchProductAction,
}: CartScreenProps) {
  const navigation = useNavigation();
  // this might need to be memoized (useMemo) pending some further testing, most likely not needed because it may not benefit from it
  const cartItems = productState.cart.items
    .map(cartItem => {
      const foundProduct = productState.products.find(
        productItem => cartItem.itemId === productItem.id
      );
      if (!foundProduct) {
        return undefined;
      }
      return {
        ...cartItem,
        ...foundProduct,
      };
    })
    .filter(item => item !== undefined);

  return (
    <View style={{ flex: 1 }}>
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
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color="#54634B"
            />
          </TouchableOpacity>
        </View>
        <Space height={16} />

        <Label varient="screen-heading">{'Cart'}</Label>
        <Divider varient="big" />
        <Space height={32} />

        {productState.cart.items.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Label style={{ fontWeight: 400 }}>No items in cart</Label>
          </View>
        ) : (
          <FlatList
            data={cartItems}
            ListFooterComponent={() => {
              const [promoCode, setPromoCode] = useState(
                productState.promoCode
              );

              return (
                <View style={{ position: 'relative' }}>
                  <TextInput
                    placeholder="Add your promo code"
                    mode="outlined"
                    style={{
                      height: 40,
                      fontFamily: 'AGaramondPro',
                      fontSize: 12,
                      marginTop: 16,
                      color: '#54634B',
                    }}
                    outlineStyle={{
                      borderRadius: 20,
                      borderColor: '#54634B',
                      borderWidth: 1,
                    }}
                    contentStyle={{
                      height: 40,
                      fontFamily: 'AGaramondPro',
                      fontSize: 12,
                    }}
                    value={promoCode}
                    onChangeText={text => setPromoCode(text)}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 27,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      dispatchProductAction({
                        type: 'APPLY_PROMO_CODE',
                        payload: promoCode,
                      });
                    }}
                  >
                    <LineSvg />
                    <Label style={{ marginHorizontal: 16 }}>{'Apply'}</Label>
                  </TouchableOpacity>
                </View>
              );
            }}
            renderItem={({ item }) => (
              <View>
                <View
                  key={item.id}
                  style={{ marginVertical: 8, flexDirection: 'row' }}
                >
                  {/* For network images would probably use @georstat/react-native-image-cache */}
                  <View style={{ width: 150, height: 150, overflow: 'hidden' }}>
                    <Image
                      source={require('../../../assets/images/image.png')}
                      style={{ resizeMode: 'cover', width: 150, height: 150 }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingLeft: 16,
                      paddingVertical: 8,
                      flex: 1,
                    }}
                  >
                    <View>
                      <Label
                        style={{
                          fontSize: 14,
                          fontFamily: 'AGaramondPro-Italic',
                        }}
                      >
                        {item.name}
                      </Label>
                      <Label
                        style={{
                          fontWeight: 700,
                          paddingTop: 8,
                          fontFamily: 'AGaramondPro-BoldItalic',
                        }}
                      >{`R ${item.price}`}</Label>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          marginEnd: 16,
                          borderColor: '#54634B',
                          borderWidth: 2,
                          borderRadius: 15,
                          paddingHorizontal: 8,
                          paddingVertical: 4,
                        }}
                        onPress={() => {
                          dispatchProductAction({
                            type: 'CLEAR_ITEM',
                            payload: item.id,
                          });
                        }}
                      >
                        <Label>Remove</Label>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          dispatchProductAction({
                            type: 'REMOVE_ITEM',
                            payload: item.id,
                          });
                        }}
                      >
                        <LessSvg />
                      </TouchableOpacity>
                      <Label
                        style={{
                          fontWeight: 500,
                          paddingHorizontal: 4,
                          fontFamily: 'Geomanist-Book',
                          lineHeight: 24,
                        }}
                      >
                        {item.count}
                      </Label>
                      <TouchableOpacity
                        onPress={() => {
                          dispatchProductAction({
                            type: 'ADD_ITEM',
                            payload: item.id,
                          });
                        }}
                      >
                        <AddSvg />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Divider varient="standard" />
              </View>
            )}
          />
        )}
      </ScreenWrapperNoScroll>
      {productState.cart.items.length !== 0 && (
        <View
          style={{
            backgroundColor: '#EBEAE4',
            paddingVertical: 32,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Label style={{ fontSize: 12 }}>{'Sub total'}</Label>
            <Label
              style={{ fontSize: 14, fontWeight: 800 }}
            >{`R ${productState.cart.subTotal}`}</Label>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Label style={{ fontSize: 12 }}>{'Delivery'}</Label>
            <Label
              style={{ fontSize: 14, fontWeight: 800 }}
            >{`R ${productState.cart.deliveryCharge}`}</Label>
          </View>
          {Boolean(productState.cart.discount) && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Label style={{ fontSize: 12 }}>{'Discount'}</Label>
              <Label style={{ fontSize: 14, fontWeight: 800 }}>{`${
                productState.cart.discount * 100
              }%`}</Label>
            </View>
          )}
          <Space height={16} />
          <Divider varient="standard" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <Label style={{ fontSize: 18, fontWeight: 700 }}>{'Total'}</Label>
            <Label
              style={{ fontSize: 18, fontWeight: 700 }}
            >{`R ${productState.cart.total.toFixed(2)}`}</Label>
          </View>
          <AppButton title="Checkout" onPress={() => {}} enabled={true} />
        </View>
      )}
    </View>
  );
}
