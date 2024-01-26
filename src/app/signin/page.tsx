import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In'),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Bem Vindo de volta! Por favor{' '}
          <span className="relative inline-block">
            Faça login
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          para continuar.
        </>
      }
      description="Ao se inscrever, você terá acesso a conteúdo exclusivo, ofertas especiais 
      e será o primeiro a saber sobre novidades e atualizações empolgantes."
      bannerDescription="Desenvolvida com você em mente, a Koutflow é a plataforma que coloca nas suas mãos as ferramentas necessárias para atingir a exponencialidade no ambiente digital e transformar seu negócio em um verdadeiro sucesso."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="Image da Página Fazer Login da Koutflow"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
