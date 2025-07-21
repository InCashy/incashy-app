"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo Section */}
      <div className="flex items-center mb-6">
        <Image
          src="https://www.incashy.com/logo.png" // replace with your image path
          alt="Cashy Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <h1 className="text-3xl font-bold text-gray-900">InCashy</h1>
      </div>

      {/* Card Section */}
      <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-xl text-center max-w-xl w-full">
        <h2 className=" md:text-2xl font-semibold text-gray-800 mb-4">
          🚧 The InCashy App isn’t ready yet 🚧
        </h2>
        <p className="text-gray-700 mb-6">
          Want it sooner? Send us your info and help shape what comes next. 🚀
        </p>
        <Link href="https://www.incashy.com/contact">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
