import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpIcon,
  HeartIcon,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Project Scope", href: "#project-scope" },
    { name: "Milestones", href: "#milestones" },
    { name: "Downloads", href: "#downloads" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact", href: "#contact-us" },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/tomatoguard/project",
      label: "GitHub",
    },
    {
      icon: MailIcon,
      href: "mailto:tomatoguard@university.edu",
      label: "Email",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/company/tomatoguard",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative group">
                <img
                  src="/tomatoLogo2.png"
                  alt="TomatoGuard Logo"
                  className="size-[75px] transition-transform duration-300 group-hover:scale-115"
                />

                <div className="absolute inset-0 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  TomatoGuard
                </span>
                <p className="text-sm text-gray-400">
                  Smart Agriculture Solution
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              From Farm to Future – Smarter Tomato Cultivation Starts Here.
              Revolutionary IoT-based system combining AI, sensors, and mobile
              technology for intelligent disease detection and crop management.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-green-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Stay Connected
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MailIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">tomatoguard@university.edu</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <p className="text-sm text-gray-300 mb-3">
                  Get project updates
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors duration-300">
                    <MailIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 TomatoGuard Research Project. Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <span>for sustainable agriculture.</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-green-600 transition-all duration-300 border border-gray-700/50 hover:border-green-500"
            >
              <span className="text-sm text-gray-300 group-hover:text-white">
                Back to top
              </span>
              <ArrowUpIcon className="h-4 w-4 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
