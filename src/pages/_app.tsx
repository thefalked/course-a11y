import { useEffect } from 'react';
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
