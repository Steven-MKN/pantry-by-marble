import { ScrollView, View } from 'react-native';
import Space from './Space';

export default function ScreenWrapper({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {children}
          <Space height={64} />
        </View>
      </ScrollView>
    </View>
  );
}
