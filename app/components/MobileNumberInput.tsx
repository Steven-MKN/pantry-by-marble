import { Label } from '@react-navigation/elements';
import { View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { isValidMobileNumberSubString } from '../utils/validation';

export type MobileNumberInputProps = {
  onClearText?: () => void;
  dialCode: string;
  errorText: string;
} & TextInputProps;

export default function MobileNumberInput({
  onClearText,
  dialCode,
  errorText,
  ...rest
}: MobileNumberInputProps) {
  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
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
        inputMode="numeric"
        onChangeText={text => {
          // TODO: check for any performance impact and improve if needed
          const _text = text
            .replace(dialCode, '')
            .replaceAll(' ', '')
            .replaceAll('|', '');
          if (isValidMobileNumberSubString(_text)) {
            rest.onChangeText && rest.onChangeText(_text);
          }
        }}
        value={dialCode.concat(
          ' | ',
          (rest.value ?? '').replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3')
        )}
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
