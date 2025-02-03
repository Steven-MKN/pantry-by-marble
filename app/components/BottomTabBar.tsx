import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { DotSvg } from '../../assets/icons';

export default function BottomTabBar(props: BottomTabBarProps) {
  if (props.state.routeNames[props.state.index] == 'cart') {
    return null;
  }

  return (
    <View
      style={{
        width: '100%',
        height: 68,
        backgroundColor: '#54634B',
        flexDirection: 'row',
      }}
    >
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {Boolean(props?.descriptors[route.key]?.options?.tabBarIcon)
                ? props.descriptors[route.key].options.tabBarIcon!({
                    focused: isFocused,
                    size: 24,
                    color: isFocused ? '#fff' : '#a8a8a8',
                  })
                : null}
              {isFocused && <DotSvg color={isFocused ? '#fff' : '#a8a8a8'} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
