import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/tomatoLogo.png" alt="TomatoGuard Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-green-400">
                TomatoGuard
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              From Farm to Future – Smarter Tomato Cultivation Starts Here
            </p>
            <p className="text-gray-400 text-sm">
              Revolutionary IoT-based system for intelligent tomato disease
              detection and crop management.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.querySelector('#home')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#project-scope')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Project Scope
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#downloads')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Downloads
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#about-us')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  About Us
                </button>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  tomatoguard@university.edu
                </span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/tomatoguard/project" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href="mailto:tomatoguard@university.edu" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  <MailIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TomatoGuard Research Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}