import NavBar from './NavBar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className='min-h-screen container'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
