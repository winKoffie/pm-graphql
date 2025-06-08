// font Setup
import { Sora } from 'next/font/google';

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
      {children}
    </div>
  );
};

export default Layout;
