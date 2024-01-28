'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from '@/utils/validators/reset-password.schema';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function ForgetPasswordForm() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<ResetPasswordSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };

  return (
    <>
      <Form<ResetPasswordSchema>
        validationSchema={resetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
        className="pt-1.5"
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-6">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Digite seu email"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              className="mt-2 w-full"
              type="submit"
              size="lg"
              color="info"
            >
              Enviar Link
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-8 lg:text-start xl:text-base">
        Lembrou sua senha?{' '}
        <Link
          href={routes.auth.signIn}
          className="font-bold text-gray-700 transition-colors hover:text-blue"
        >
          Entrar na conta
        </Link>
      </Text>
    </>
  );
}
