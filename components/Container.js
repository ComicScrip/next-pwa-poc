import { IsOnline } from './IsOnline';
import Link from 'next/link';

export const Container = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='/dynamic-content'>
                <a>Dynamic content</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <IsOnline />
    </div>
  );
};
