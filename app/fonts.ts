// app/fonts.ts
import localFont from 'next/font/local';

export const gopher = localFont({
  src: [
    {
      path: './public/fonts/d.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/d.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gopher', // optional CSS variable
});
