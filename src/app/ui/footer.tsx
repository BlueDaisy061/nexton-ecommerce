import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-default pt-6 left-0 right-0 border-t border-t-border">
      <div className="grid grid-cols-1 gap-[60px] px-6 py-6 md:grid-cols-4 md:px-[3.5rem] lg:px-[5rem]">
        <div>
          <Image src="/logo.svg" alt="Nexton-logo" width={100} height={42} className="mb-5" />
          <div className="grid grid-cols-1 gap-3">
            <div className="flex gap-2">
              <Image src="/facebook-logo.svg" alt="facebook-logo" width={16} height={16} />
              <p>Facebook</p>
            </div>
            <div className="flex gap-2">
              <Image src="/youtube-logo.svg" alt="youtube-logo" width={16} height={16} />
              <p>Youtube</p>
            </div>
            <div className="flex gap-2">
              <Image src="/telegram-logo.svg" alt="telegram-logo" width={16} height={16} />
              <p>Telegram</p>
            </div>
            <div className="flex gap-2">
              <Image src="/twitter-logo.svg" alt="twitter-logo" width={16} height={16} />
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-5">Getting started</h5>
          <div className="grid grid-cols-1 gap-3">
            <p>Release Notes</p>
            <p>Upgrade Guide</p>
            <p>Browser Support</p>
            <p>Dark Mode</p>
          </div>
        </div>
        <div>
          <h5 className="mb-5">Explore</h5>
          <div className="grid grid-cols-1 gap-3">
            <p>Prototyping</p>
            <p>Design systems</p>
            <p>Pricing</p>
            <p>Security</p>
          </div>
        </div>
        <div>
          <h5 className="mb-5">Getting started</h5>
          <div className="grid grid-cols-1 gap-3">
            <p>Discussion Forums</p>
            <p>Code of Conduct</p>
            <p>Contributing</p>
            <p>API Reference</p>
          </div>
        </div>
      </div>
      <div className="py-5 text-center flex flex-col gap-3 border-t border-t-border md:flex-row md:justify-between md:px-[80px]">
        <p>Nexton eCommerce. © 2024</p>
        <div className="flex justify-center gap-1">
          {['visa', 'paypal', 'stripe', 'verisign'].map((paymentMethod, key) => (
            <Image
              key={key}
              src={`/${paymentMethod}.svg`}
              alt={paymentMethod}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
