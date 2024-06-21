
import localFont from 'next/font/local'
import "./globals.css";
import SmoothScroll from '@/Components/SmoothScroll';
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi'
})

export const metadata = {
  title: "Satirtha Roy",
  description: "Satirtha Roy is a Frontend Developer. It's Satirtha Roy's Portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll></body>
    </html>
  );
}
