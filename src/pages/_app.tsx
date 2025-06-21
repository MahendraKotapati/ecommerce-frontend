import { store } from "@/lib/store";
import "@/styles/globals.css";
import { Toaster } from "@/utils/components-shadcn/ui/sonner";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/next';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
       <Component {...pageProps} />
       <Toaster />
       <Analytics />
    </Provider>
     
  );
}
