"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-8 lg:px-12 border-b-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-primary hover:text-gray-900 text-lg font-semibold"
            >
              Reja
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-900 text-lg font-semibold"
            >
              Qabul qilish talablari
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-900 text-lg font-semibold"
            >
              Korsatmalar
            </a>
            <a
              href="#"
              className="text-primary hover:text-gray-900 text-lg font-semibold"
            >
              Saralash
            </a>
          </div>

          {/* Language and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://v0.dev/placeholder.svg"
                alt="Language"
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm font-semibold">O'zbek Tili</span>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Sinovdan o'ting
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-primary hover:text-gray-900">
              Qabul qilish talablari
            </a>
            <a href="#" className="block text-primary hover:text-gray-900">
              Korsatmalar
            </a>
            <a href="#" className="block text-primary hover:text-gray-900">
              Saralash
            </a>
            <div className="flex items-center space-x-2 py-2">
              <img
                src="https://v0.dev/placeholder.svg"
                alt="Language"
                className="w-5 h-5 rounded-full"
              />
              <span>O'zbek Tili</span>
            </div>
            <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg">
              Sinovdan o'ting
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
