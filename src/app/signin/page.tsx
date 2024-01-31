import SignInForm from './sign-in-form';
import { metaObject } from '@/config/site.config';
import AuthWrapperFour from '../shared/auth-layout/auth-wrapper-four';

export const metadata = {
  ...metaObject('Entrar'),
};

export default function SignIn() {
  return (
    <AuthWrapperFour
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
    </AuthWrapperFour>
  );
}
