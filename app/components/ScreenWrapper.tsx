import { Platform, ScrollView, View } from 'react-native';
import Space from './Space';

export default function ScreenWrapper({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  const isAndroid = Platform.OS === 'android';

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        paddingTop: isAndroid ? 32 : 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {children}
          <Space height={64} />
        </View>
      </ScrollView>
    </View>
  );
}

export function ScreenWrapperNoScroll({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  const isAndroid = Platform.OS === 'android';

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        paddingTop: isAndroid ? 32 : 0,
      }}
    >
      {children}
    </View>
  );
}
