import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {icons:{icon:'/favicon.svg'},title:'Level up with Sam | San Diego Hairstylist',description:'Personalized haircuts, styling, color, highlights, balayage, and hair treatments with Sam in San Diego, California.'};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
