"use client";

import { FaChurch, FaUniversity, FaHandsHelping, FaLandmark, FaBuilding } from "react-icons/fa";

const partners = [
  { name: "Churches & Denominations", icon: <FaChurch className="text-3xl text-blue-600" /> },
  { name: "Schools & Universities", icon: <FaUniversity className="text-3xl text-red-600" /> },
  { name: "NGOs & Community Organizations", icon: <FaHandsHelping className="text-3xl text-green-600" /> },
  { name: "Government Agencies", icon: <FaLandmark className="text-3xl text-purple-600" /> },
  { name: "Private Enterprises", icon: <FaBuilding className="text-3xl text-orange-600" /> },
];

export default function PartnershipsSection() {
  return (
    <section className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-7xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side - text */}
        <div className="">
          <div className="flex items-center space-x-2 mb-4">
            <FaBuilding className="text-3xl text-blue-500" />
          </div>
          <div>
          <h2 className="text-3xl md:text-6xl font-light text-gray-900 mb-4">
            Our Partnerships
          </h2>
          <p className="text-gray-600 max-w-md">
            We collaborate with key institutions across various sectors to create meaningful impact 
            and foster sustainable development in communities worldwide.
          </p>
          </div>
        </div>

        {/* Right side - partner icons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-3">{partner.icon}</div>
              <p className="font-medium text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
