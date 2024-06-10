import Link from 'next/link';

export const NavLinks = (props: any) => {
  return (
    <ul className={props.classNames} onClick={props.onClick}>
      <li className={props.pathname === '/' ? 'font-semibold' : ''}>
        <Link className="px-4" href={'/'}>
          Home
        </Link>
      </li>
      <li className={props.pathname === '/shop' ? 'font-semibold' : ''}>
        <Link className="px-4" href={'/shop'}>
          Shop
        </Link>
      </li>
      <li className={props.pathname === '/about' ? 'font-semibold' : ''}>
        <Link className="px-4" href={'/about'}>
          About
        </Link>
      </li>
    </ul>
  );
};
