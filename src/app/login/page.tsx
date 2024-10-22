'use client';

import { Input } from 'antd';
import { PrimaryButton } from '../ui/button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:flex md:justify-center md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="md:w-1/2 lg:w-1/3">
        <h2 className="text-center mb-10">Login</h2>
        <form action="" className="flex flex-col gap-6">
          <div>
            <h5 className="mb-2">Email</h5>
            <Input size="large" placeholder="example@example.com" />
          </div>
          <div>
            <h5 className="mb-2">Password</h5>
            <Input.Password size="large" />
          </div>
          <PrimaryButton title="Continue" />
        </form>
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
