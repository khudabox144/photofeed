import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "photoFeed",
  description: "photoFeed by Next.js",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal} {/* Modal slot */}
        <div id="modal-root-content" /> {/* Needed for portal */}
      </body>
    </html>
  );
}
