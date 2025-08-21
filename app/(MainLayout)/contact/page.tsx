import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import SalesAndTechnicalSupport from '@/components/SalesAndTechnicalSupport';
// import CallToAction from '@/components/CallToAction';

import type { Metadata } from 'next';
import type { PageHeaderProps } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact',
};

async function getHeaderData(): Promise<PageHeaderProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'Talk to us',
        subtitle: 'Discover the Beauty of Kenya with Travel Nomads',
        backgroundImageSrc: '/images/contact.jpg',
        showSearch: false,
      });
    }, 1000);
  });
}

export default async function ContactUsPage() {
  const headerData = await getHeaderData();
  return (
    <>
      <PageHeader {...headerData} />
      <main className="bg-gray-50 min-h-64">
        <SalesAndTechnicalSupport />
        {/* <CallToAction /> */}
      </main>
    </>
  );
}
