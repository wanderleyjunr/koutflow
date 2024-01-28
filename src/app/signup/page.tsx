import SignUpForm from './sign-up-form';
import { metaObject } from '@/config/site.config';
import AuthWrapperThree from '../shared/auth-layout/auth-wrapper-three';

export const metadata = {
  ...metaObject('Criar Conta'),
};

export default function SignUp() {

  return (
    <AuthWrapperThree
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Cadastre-se
          </span>{' '}<br/>
          Rápido, fácil e simples!
        </>
      }
      isSocialLoginActive={true}
    >
      <SignUpForm />
    </AuthWrapperThree>
  );
}
