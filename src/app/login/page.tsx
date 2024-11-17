'use client';

import { Form, FormProps, Input } from 'antd';
import { PrimaryButton } from '../ui/button';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { ProductContext } from '../(context)/context';
import { loggedInErrors } from '../lib';
import { useRouter } from 'next/navigation';
import { poppins } from '../ui/fonts';

type UserLogInInfo = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { loggedInHandler } = useContext(ProductContext);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [unregisterError, setUnregisterError] = useState(false);
  const router = useRouter();

  const resetErrors = () => {
    setWrongPassword(false);
    setUnregisterError(false);
  };

  const onFinish: FormProps<UserLogInInfo>['onFinish'] = async (values) => {
    await fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          loggedInHandler();
          router.push('/');
        } else {
          if (data.errors === loggedInErrors.WRONG_PASSWORD) {
            setWrongPassword(true);
          }
          if (data.errors === loggedInErrors.UNREGISTER) {
            setUnregisterError(true);
          }
        }
      });
  };

  const onFinishFailed: FormProps<UserLogInInfo>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:flex md:justify-center md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="md:w-1/2 lg:w-1/3">
        <h2 className="text-center mb-6">Login</h2>
        <div className="h-5">
          {wrongPassword ? <p className="text-red">*Wrong password, please type again.</p> : <></>}
          {unregisterError ? (
            <p className="text-red">*User is not registered, please sign up.</p>
          ) : (
            <></>
          )}
        </div>
        <Form
          name="login-form"
          layout="vertical"
          initialValues={{ email: '', password: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col gap-4 mt-4"
        >
          <Form.Item<UserLogInInfo>
            label={<h5 className={`${poppins.className}`}>Email</h5>}
            name="email"
            rules={[
              {
                required: true,
                message: (
                  <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                    Email is required
                  </p>
                ),
              },
              {
                type: 'email',
                message: (
                  <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                    Invalid email address
                  </p>
                ),
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input size="large" placeholder="example@gmail.com" className={poppins.className} />
          </Form.Item>

          <Form.Item<UserLogInInfo>
            label={<h5 className={`${poppins.className}`}>Password</h5>}
            name="password"
            rules={[
              {
                required: true,
                message: (
                  <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                    Password is required
                  </p>
                ),
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input.Password size="large" className={poppins.className} />
          </Form.Item>

          <Form.Item>
            <PrimaryButton
              style="w-full lg:py-3"
              type="submit"
              title="Login"
              onClick={resetErrors}
            />
          </Form.Item>
        </Form>
        <div className="flex gap-3 items-center mt-8 mb-6">
          <hr className="w-full text-border" />
          <p>OR</p>
          <hr className="w-full text-border" />
        </div>
        <div className="flex gap-1 justify-center">
          <p>New user?</p>
          <Link href={'/register'}>
            <p className="text-vibrant">Create an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
