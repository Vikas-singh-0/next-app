import Footer from '@/comps/Footer';
import Header from '@/comps/Header';

export default function App({ Component, pageProps }) {
  console.log('app');
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
