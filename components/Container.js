import { IsOnline } from './IsOnline';

export const Container = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <IsOnline />
    </div>
  );
};
