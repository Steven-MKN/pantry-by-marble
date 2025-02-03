import { Fragment } from 'react';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Label from './Label';

export type AppButtonProps = {
  readonly varient?: 'primary' | 'outlined' | 'text';
  readonly onPress: () => void;
  readonly title: string;
  readonly enabled: boolean;
  readonly loading?: boolean;
  readonly icon?: React.ReactElement;
  readonly style?: any;
};

export default function AppButton({
  enabled = true,
  varient = 'primary',
  ...rest
}: AppButtonProps) {
  switch (varient) {
    case 'text':
      return (
        <TouchableOpacity onPress={rest.onPress} style={{}}>
          <View style={{ flexDirection: 'row' }}>
            {rest.icon ?? null}
            <Label style={{ color: '#54634B', fontSize: 14 }}>
              {rest.title}
            </Label>
          </View>
        </TouchableOpacity>
      );
    case 'primary':
      return (
        <TouchableHighlight
          onPress={rest.onPress}
          style={{
            backgroundColor: '#54634B',
            borderRadius: 80,
            paddingHorizontal: 20,
            paddingVertical: 5,
            alignItems: 'center',
            width: '100%',
            height: 56,
            opacity: enabled ? 1 : 0.5,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {rest.loading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <Fragment>
                {rest.icon ?? null}
                <Label style={{ color: '#FCF9F5', fontSize: 14 }}>
                  {rest.title}
                </Label>
              </Fragment>
            )}
          </View>
        </TouchableHighlight>
      );
    case 'outlined':
      return (
        <TouchableOpacity
          onPress={rest.onPress}
          style={{
            borderColor: '#54634B',
            borderWidth: 1,
            borderRadius: 80,
            paddingHorizontal: 20,
            paddingVertical: 5,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {rest.icon ?? null}
            <Label style={{ color: '#54634B', fontSize: 14 }}>
              {rest.title}
            </Label>
          </View>
        </TouchableOpacity>
      );
  }
}
