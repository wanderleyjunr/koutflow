import { Title, Text } from '@/components/ui/text';
import OtpForm from './otp-form';
import AuthWrapperThree from '@/app/shared/auth-layout/auth-wrapper-three';

export default function ForgotPassword() {
  return (
    <AuthWrapperThree
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Validar código recebido
          </span>
        </>
      }
      className="md:px-20 lg:px-36 lg:py-40"
    >
      <Text className="pb-7 text-center text-[15px] leading-[1.85] text-gray-700 md:text-base md:!leading-loose lg:-mt-1">
      Enviamos um código para seu e-mail. Por favor insira abaixo.
      </Text>
      <OtpForm />
    </AuthWrapperThree>
  );
}
