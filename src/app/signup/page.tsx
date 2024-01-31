import SignUpForm from './sign-up-form';
import { metaObject } from '@/config/site.config';
import AuthWrapperFour from '../shared/auth-layout/auth-wrapper-four';

export const metadata = {
  ...metaObject('Criar Conta'),
};

export default function SignUp() {
  return (
    <AuthWrapperFour
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Cadastre-se
          </span>{' '}
          <br />
          Rápido, fácil e simples!
        </>
      }
      isSocialLoginActive={true}
    >
      <SignUpForm />
    </AuthWrapperFour>
  );
}
