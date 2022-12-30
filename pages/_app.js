import { Provider } from 'react-redux'
import { store } from '../app/store';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

// https://www.youtube.com/watch?v=DF68MNDxVwU
// 🔴 Let's build Amazon 2.0 with NEXT.JS! (ReactJS, Webhooks, Stripe Checkout, Firestore, NextAuth)
