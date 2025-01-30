import ScreenWrapper from '@/app/components/ScreenWrapper';
import { Text } from 'react-native';

export default function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
    </ScreenWrapper>
  );
}
