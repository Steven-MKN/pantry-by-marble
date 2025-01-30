import { View } from 'react-native';

export type DividerProps = {
  readonly varient: 'standard' | 'big';
};

export default function Divider({ varient = 'standard' }: DividerProps) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#54634B',
        height: varient == 'big' ? 15 : 1,
      }}
    />
  );
}
