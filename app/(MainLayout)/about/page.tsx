import React from 'react';
import { PageHeader } from '@/components/PageHeader';
// import CallToAction from '@/components/CallToAction';

import type { Metadata } from 'next';
import type { PageHeaderProps } from '@/components/PageHeader';
// import AboutUs from '@/components/AboutUs';
// import StatsSection from "@/components/StatsSection";
import AboutIntro from "@/components/AboutIntro";
import VisionMissionValues from "@/components/VisionMissionValues";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: 'About Us',
};

async function getHeaderData(): Promise<PageHeaderProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'About Us',
        subtitle: 'Discover the Beauty of Kenya with Travel Nomads',
        backgroundImageSrc: '/images/about.jpg',
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
      <main className="bg-gray-50 min-h-64 ">
        <div className="">
          <AboutIntro />
          <VisionMissionValues />
          <WhyUsSection />
          <ProcessSection />
          {/* <StatsSection /> */}
        </div>
      </main>
    </>
  );
}
