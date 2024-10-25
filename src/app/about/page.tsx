'use client';

import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Image from 'next/image';
import { PrimaryButton } from '../ui/button';

export default function AboutPage() {
  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="flex flex-col gap-16">
        <div className="w-full flex flex-col gap-3 md:w-1/2">
          <h2>About us</h2>
          <p>
            We not only help you design exceptional products, but also make it easy for you to share
            your designs with more like-minded people.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-14 md:flex-nowrap lg:gap-28">
          <input type="image" alt="about-us-1" src="/about-us-1.png" className="w-full md:w-1/2" />
          <div className="flex flex-col gap-3">
            <h3 className="w-full lg:w-1/2">Provide fashionable and qualifed products</h3>
            <p>
              Already millions of people are very satisfied by this page builder and the number is
              growing more and more. Technolog developing, requirements are increasing. Riode has
              brought.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse justify-between items-center gap-8 md:gap-14 md:flex-nowrap lg:gap-28">
          <div className="flex flex-col gap-3">
            <h3 className="w-full lg:w-1/2">Provide fashionable and qualifed products</h3>
            <p>
              Already millions of people are very satisfied by this page builder and the number is
              growing more and more. Technolog developing, requirements are increasing. Riode has
              brought.
            </p>
          </div>
          <input type="image" alt="about-us-1" src="/about-us-2.png" className="w-full md:w-1/2" />
        </div>
        <div className="w-full">
          <h3 className="my-10">Get in touch with us</h3>
          <div className="flex flex-col gap-10 lg:flex-row lg:w-full justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <h4>Address</h4>
                <p className="mt-2">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                </p>
              </div>
              <div>
                <h4>Email</h4>
                <p className="mt-2">nexton@example.com</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p className="mt-2">000-123-456-7890</p>
              </div>
              <div className="hidden md:block">
                <h4>Socials</h4>
                <div className="mt-2 flex gap-3">
                  <Image src="/facebook-logo.svg" alt="facebook-logo" width={24} height={24} />
                  <Image src="/youtube-logo.svg" alt="facebook-logo" width={24} height={24} />
                  <Image src="/telegram-logo.svg" alt="facebook-logo" width={24} height={24} />
                  <Image src="/twitter-logo.svg" alt="facebook-logo" width={24} height={24} />
                </div>
              </div>
            </div>
            <hr className="text-border lg:hidden" />
            <form className="flex flex-col gap-6 lg:w-1/2">
              <div>
                <h5 className="mb-2">Full name</h5>
                <Input size="large" placeholder="Enter your name..." />
              </div>
              <div>
                <h5 className="mb-2">Email address</h5>
                <Input size="large" placeholder="Enter your email..." />
              </div>
              <div>
                <h5 className="mb-2">Message</h5>
                <TextArea rows={5} placeholder="Enter your message..." />
              </div>
              <PrimaryButton title={'Send Message'} style="md:w-fit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
