import AppButton from '@/app/components/AppButton';
import AppTextInput from '@/app/components/AppTextInput';
import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import MobileNumberInput from '@/app/components/MobileNumberInput';
import ScreenWrapper from '@/app/components/ScreenWrapper';
import Space from '@/app/components/Space';
import {
  isValidEmail,
  isValidFullName,
  isValidMobileNumber,
  isValidPassword,
} from '@/app/utils/validation';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function SignUp({ onLogin }: { onLogin: () => void }) {
  const [fullName, setFullName] = useState('John Doe');
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState('john.doe@email.com');
  const [emailError, setEmailError] = useState(false);
  const [dialCode] = useState('+27');
  const [mobileNumber, setMobileNumber] = useState('728154332');
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [password, setPassword] = useState('12345678!Aa');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!isValidFields()) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  const isValidFields = () => {
    let isValid = true;
    if (!isValidFullName(fullName)) {
      isValid = false;
      setFullNameError(true);
    }

    if (!isValidEmail(email)) {
      isValid = false;
      setEmailError(true);
    }

    if (!isValidMobileNumber(mobileNumber)) {
      isValid = false;
      setMobileNumberError(true);
    }

    if (!isValidPassword(password)) {
      isValid = false;
      setPasswordError(true);
    }

    return isValid;
  };

  return (
    <ScreenWrapper>
      <Pressable style={{ alignSelf: 'flex-end' }} onPress={onLogin}>
        <Label>{'Expore app'}</Label>
      </Pressable>
      <Label varient="screen-heading-italic">
        {'Welcome to\nPantry by Marble'}
      </Label>
      <Label style={{ fontSize: 16, paddingBottom: 8 }}>
        {'Sign up for easy payment, collection and much more'}
      </Label>

      <Divider varient="big" />

      <Space height={64} />

      <AppTextInput
        label={'Full name'}
        value={fullName}
        inputMode="text"
        onClearText={() => {
          setFullName('');
        }}
        onChangeText={text => {
          if (fullNameError) {
            setFullNameError(false);
          }
          setFullName(text);
        }}
        error={fullNameError}
        errorText={'Please provide a valid full name'}
      />
      <Space height={8} />

      <AppTextInput
        label={'Email'}
        value={email}
        onClearText={() => {
          setEmail('');
        }}
        onChangeText={text => {
          if (emailError) {
            setEmailError(false);
          }
          setEmail(text);
        }}
        inputMode="email"
        errorText={'Please provide a valid email'}
      />
      <Space height={8} />

      <MobileNumberInput
        label={'Mobile number'}
        value={mobileNumber}
        onClearText={() => {
          setMobileNumber('');
        }}
        onChangeText={text => {
          if (mobileNumberError) {
            setMobileNumberError(false);
          }
          setMobileNumber(text);
        }}
        dialCode={dialCode}
        errorText={'Please provide a valid South African mobile number'}
      />
      <Space height={8} />

      <AppTextInput
        label={'Create Password'}
        value={password}
        onClearText={() => {
          setPassword('');
        }}
        onChangeText={text => {
          if (passwordError) {
            setPasswordError(false);
          }
          setPassword(text);
        }}
        inputMode="text"
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye' : 'eye-off'}
            color={'#54634B'}
            size={22}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorText={
          'Please provide a valid password with atleast 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
        }
      />
      <Space height={32} />

      <AppButton
        title="Sign Up"
        enabled={!isLoading}
        onPress={handleSignUp}
        loading={isLoading}
      />

      <Space height={32} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Label>{'Have an accout?'}</Label>
        <Pressable onPress={onLogin}>
          <Label style={{ fontWeight: 800 }}>{' Login'}</Label>
        </Pressable>
      </View>

      <Space height={32} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#54634B',
            height: 1,
          }}
        />
        <Label style={{ paddingHorizontal: 16, color: '#54634B' }}>or</Label>
        <View
          style={{
            flex: 1,
            backgroundColor: '#54634B',
            height: 1,
          }}
        />
      </View>

      <Space height={32} />
      <AppButton
        title="Expore our app"
        enabled={!isLoading}
        onPress={onLogin}
      />

      <Space height={32} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Label>{'By signing up you agree to out'}</Label>
        <Pressable
          onPress={() => {
            // TODO: open terms
          }}
        >
          <Label style={{ fontWeight: 800 }}>{' Terms,'}</Label>
        </Pressable>
        <Pressable
          onPress={() => {
            // TODO: open data policy
          }}
        >
          <Label style={{ fontWeight: 800 }}>{' Data Policy,'}</Label>
        </Pressable>
        <Label>{' and'}</Label>
        <Pressable
          onPress={() => {
            // TODO: open cookies policy
          }}
        >
          <Label style={{ fontWeight: 800 }}>{' Cookies Policy'}</Label>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
