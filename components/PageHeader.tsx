import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';


export interface Breadcrumb {
  name: string;
  href: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImageSrc: string;
  showSearch?: boolean;
  breadcrumbs?: Breadcrumb[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImageSrc,
  showSearch = false,
  breadcrumbs,
}) => {
  return (
    <header
      className="relative w-full h-[600px] md:h-[700px] text-white overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImageSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-sky-900/10 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center pt-24 md:pt-32 p-4 md:p-8 lg:p-12 w-full max-w-7xl mx-auto h-full">
        
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 text-sm font-semibold text-gray-200 space-x-1">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="inline">
                <Link
                  href={crumb.href}
                  className="hover:underline text-white/80"
                >
                  {crumb.name}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
              </span>
            ))}
          </nav>
        )}

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight mb-4 tracking-wide font-header uppercase">
          {title}
        </h1>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-12 opacity-90 font-inter hidden">
            {subtitle}
          </p>
        )}

        {/* Search Box (if enabled) */}
        {/* {showSearch && <SearchBox />} */}
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-3/4 right-4 lg:right-24 transform -translate-y-1/2 flex flex-col space-y-4 z-30">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-lime-600 transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-700 transition"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-600 transition"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};
