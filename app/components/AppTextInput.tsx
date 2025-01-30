import { View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import Label from './Label';

export type AppTextInputProps = {
  onClearText?: () => void;
  errorText?: string;
} & TextInputProps;

export default function AppTextInput({
  onClearText,
  errorText,
  ...rest
}: AppTextInputProps) {
  return (
    <View style={{ flexDirection: 'column', width: '100%' }}>
      <TextInput
        mode="flat"
        right={
          <TextInput.Icon
            icon={'close'}
            color={'#54634B'}
            size={22}
            onPress={onClearText}
          />
        }
        {...rest}
        textColor={'#54634B'}
        placeholderTextColor={'#54634B'}
        underlineColor={'#54634B'}
        activeUnderlineColor="#54634B"
        underlineStyle={{ height: 1 }}
        style={{
          width: '100%',
          color: '#54634B',
          paddingLeft: 0,
          marginStart: 0,
        }}
      />
      {rest.error && (
        <Label style={{ color: '#b23e1e', fontSize: 12, marginTop: 4 }}>
          {errorText}
        </Label>
      )}
    </View>
  );
}
