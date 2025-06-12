// font Setup
import './globals.css';
import { Sora } from 'next/font/google';
import Header from './Header';

//Font Settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});


const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-black bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
