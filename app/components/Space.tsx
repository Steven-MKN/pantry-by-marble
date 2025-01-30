import { View } from 'react-native';

export default function Space({
  height = 0,
  width = 0,
}: {
  readonly height?: number;
  readonly width?: number;
}) {
  return <View style={{ height, width }} />;
}
