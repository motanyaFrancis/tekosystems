import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function MainLayout({
  children,
  // params,
}: {
  children: ReactNode;
  params: { slug?: string }; 
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
