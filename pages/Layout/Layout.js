import Main from './main';
import Footer from './footer';
function Layout ({children})
{
  return(
      <>
      <Main />
      {children}
      <Footer />
      </>
  )
}
export default Layout;
