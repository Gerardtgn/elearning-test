import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Search, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);

  const menuItems = [
    { title: "Accueil", link: "/" },
    { 
      title: "A propos",
      link: '/about'
    },
    { 
      title: "Services",
      link: '/service'
    },
    {
      title: "Pages",
      submenu: [
        {
          title: "Cours",
          link: "/cours"
        },
        { title: "TD", link: "/td" },
        {
          title: "Enseignants",
          link: "/teacher"
        },
        {
          title: "Articles",
          link: "/article"
        },
        {
          title: "Contact",
          link: "/contact"
        }
      ]
    },
  ];

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const toggleDesktopMenu = (index) => {
    if (activeDesktopMenu === index) {
      setActiveDesktopMenu(null);
    } else {
      setActiveDesktopMenu(index);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-[#fe4a55] to-[#ff6b6b] fixed w-full top-0 z-50 mb-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-white hover:text-pink-100 transition duration-300">
                ELearning
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.submenu ? (
                    <button 
                      onClick={() => toggleDesktopMenu(index)}
                      onMouseEnter={() => setActiveDesktopMenu(index)}
                      onMouseLeave={() => setActiveDesktopMenu(null)}
                      className="px-3 py-2 text-white hover:text-pink-200 flex items-center space-x-1 transition duration-300"
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform duration-300 ${
                          activeDesktopMenu === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a 
                      href={item.link}
                      className="px-3 py-2 text-white hover:text-pink-200 transition duration-300"
                    >
                      {item.title}
                    </a>
                  )}
                  
                  {item.submenu && (
                    <div 
                      onMouseEnter={() => setActiveDesktopMenu(index)}
                      onMouseLeave={() => setActiveDesktopMenu(null)}
                      className={`absolute z-10 left-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform
                        ${activeDesktopMenu === index 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 -translate-y-4 invisible'}`}
                    >
                      <div className="py-1 rounded-md bg-gradient-to-b from-white to-pink-50">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fe4a55] hover:text-white transition duration-300 transform hover:translate-x-2"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-48 px-4 py-1 text-sm border rounded-full focus:border-[#fe4a55] focus:ring-2 focus:ring-pink-300 transition-all duration-300"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-1 text-white focus:border-[#fe4a55] focus:ring-2 focus:ring-pink-300 transition duration-300"
                >
                  <User size={20} />
                  <ChevronDown 
                    size={16}
                    className={`transform transition-transform duration-300 ${
                      isProfileOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ease-in-out
                  ${isProfileOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-4 invisible'}`}
                >
                  <div className="py-1 rounded-md bg-gradient-to-b from-white to-pink-50">
                    <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fe4a55] hover:text-white transition duration-300 transform hover:translate-x-2">
                      Se connecter
                    </a>
                    <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fe4a55] hover:text-white transition duration-300 transform hover:translate-x-2">
                      S'inscrire
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-200 hover:bg-pink-700 transition duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                {item.submenu ? (
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex justify-between items-center px-3 py-2 w-full text-left font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition duration-300"
                  >
                    <span>{item.title}</span>
                    <ChevronRight 
                      size={16} 
                      className={`transform transition-transform duration-300 ${
                        activeSubmenu === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <a 
                    href={item.link}
                    className="block px-3 py-2 font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition duration-300"
                  >
                    {item.title}
                  </a>
                )}
                
                {item.submenu && (
                  <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSubmenu === index ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-gray-100 transition duration-300 transform hover:translate-x-2"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Mobile Profile Options */}
            <div className="border-t border-gray-200 pt-4 bg-gray-50">
              <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition duration-300">
                Se connecter
              </a>
              <a href="/register" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition duration-300">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={`h-16 ${isOpen ? 'md:h-16 h-screen' : 'h-16'}`}></div>
    </>
  );
};

export default Navbar;