import { IsOnline } from './IsOnline';

export const Container = ({ children }) => {
  return (
    <div>
      <header>
        <nav>nav</nav>
      </header>
      <main>{children}</main>
      <IsOnline />
    </div>
  );
};
