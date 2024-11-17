'use client';

import { Form, FormProps, Input } from 'antd';
import { PrimaryButton } from '../ui/button';
import Link from 'next/link';
import { poppins } from '../ui/fonts';
import { useContext, useState } from 'react';
import { ProductContext } from '../(context)/context';
import { useRouter } from 'next/navigation';

type UserRegisterInfo = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const { loggedInHandler } = useContext(ProductContext);
  const [existingUserError, setExistingUserError] = useState(false);
  const router = useRouter();

  const resetErrors = () => {
    setExistingUserError(false);
  };

  const onFinish: FormProps<UserRegisterInfo>['onFinish'] = async (values) => {
    const { username, email, password } = values;
    await fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          loggedInHandler();
          router.push('/');
        } else {
          setExistingUserError(true);
        }
      });
  };

  const onFinishFailed: FormProps<UserRegisterInfo>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:flex md:justify-center md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="md:w-1/2 lg:w-1/3">
        <h2 className="text-center mb-10">Register</h2>
        <div className="h-5">
          {existingUserError ? (
            <p className="text-red">*Existing user, please register with another email.</p>
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
          <Form.Item<UserRegisterInfo>
            label={<h5 className={`${poppins.className}`}>Username</h5>}
            name="username"
            rules={[
              {
                required: true,
                message: (
                  <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                    User name is required
                  </p>
                ),
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input size="large" placeholder="User name..." className={poppins.className} />
          </Form.Item>

          <Form.Item<UserRegisterInfo>
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

          <Form.Item<UserRegisterInfo>
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

          <Form.Item<UserRegisterInfo>
            label={<h5 className={`${poppins.className}`}>Password (Again)</h5>}
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: (
                  <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                    Confirm password is required
                  </p>
                ),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    <p className={`${poppins.className} text-red text-sm mt-1 ml-1`}>
                      Password does not match
                    </p>
                  );
                },
              }),
            ]}
            validateTrigger="onBlur"
          >
            <Input.Password size="large" className={poppins.className} />
          </Form.Item>

          <Form.Item>
            <PrimaryButton
              style="w-full lg:py-3"
              type="submit"
              title="Register"
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
          <p>Already a member?</p>
          <Link href={'/login'}>
            <p className="text-vibrant">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
