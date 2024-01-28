import SignInForm from './sign-in-form';
import { metaObject } from '@/config/site.config';
import AuthWrapperThree from '../shared/auth-layout/auth-wrapper-three';

export const metadata = {
  ...metaObject('Entrar'),
};

export default function SignIn() {
  return (
    <AuthWrapperThree
    title={
      <>
        <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
          Entrar na Conta
        </span>{' '}
        !
      </>
    }
    isSignIn
    isSocialLoginActive={true}
  >
    <SignInForm />
  </AuthWrapperThree>
  );
}
