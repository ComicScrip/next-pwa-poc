import { IsOnline } from './IsOnline';

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
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <IsOnline />
    </div>
  );
};
