import "@/styles/globals.css";
import "../styles/reset.scss";
import "../styles/globals.scss";
import "../styles/dropdown.scss";
import "../styles/Stepper.scss";
import "../styles/Quote.scss";
import "react-datepicker/dist/react-datepicker.css";
import "aos/dist/aos.css";
import "react-phone-number-input/style.css";

import { AppStateProvider } from './appContext';

export const metadata = {
  title: "PriorityShips",
  description: "PriorityShips by create next app",
  icons: {
    icon: { url: "/logo.png", type: "image/png" },
    shortcut: { url: "/logo.png", type: "image/png" },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
