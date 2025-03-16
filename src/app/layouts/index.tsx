import type { Metadata } from 'next';
import { Lora, Lato } from 'next/font/google';
import { Header } from '@widgets/header/ui/Header';
import { Toaster } from '@shared/ui/sonner';
import '@app/globals.css';
import 'react-photo-view/dist/react-photo-view.css';
import { Footer } from '@widgets/footer/ui/Footer';

const lora = Lora({
  variable: '--display-font',
  subsets: ['cyrillic-ext'],
});

const lato = Lato({
  variable: '--body-font',
  weight: ['400'],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: '«Сириус» – бессмертный полк',
  description:
    'Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и поделись историей ветерана!',
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${lora.variable} ${lato.variable}`}>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
