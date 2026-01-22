import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/join', label: 'Join' },
    {
      label: 'About Us',
      dropdown: [
        { to: '/team', label: 'Executive Team' },
        { to: '/alumni', label: 'Alumni' },
        { to: '/advisor', label: 'Advisor' },
      ],
    },
    {
      label: 'Projects',
      dropdown: [{ to: '/projects', label: 'All Projects' }],
    },
    { to: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-stone-950 shadow-lg transition-all duration-300 ease-in-out ${
        openDropdown ? 'pb-8' : ''
      }`}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <nav className="relative flex items-center justify-between px-8 py-6">
        <Link to="/" className="flex items-center gap-3 no-underline z-10">
          <img src={logo} alt="Triton Droids" className="h-auto w-36" />
        </Link>

        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                      openDropdown === item.label
                        ? 'bg-card-bg text-main-text'
                        : item.dropdown.some((d) => isActive(d.to))
                          ? 'text-accent font-semibold'
                          : 'text-main-text hover:text-accent'
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  to={item.to || '#'}
                  className={`flex items-center px-4 py-2 rounded-lg text-main-text no-underline transition-colors ${
                    isActive(item.to || '')
                      ? 'text-accent font-semibold'
                      : 'hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/donate"
            className="px-6 py-2 bg-accent text-button-text font-bold rounded-full hover:bg-accent/90 transition-colors z-10"
          >
            DONATE
          </Link>
        </div>
      </nav>

      {openDropdown && (
        <div className="px-8 pb-4">
          <div className="flex gap-6 justify-center">
            {navItems
              .find((item) => item.label === openDropdown)
              ?.dropdown?.map((dropdownItem) => (
                <Link
                  key={dropdownItem.to}
                  to={dropdownItem.to}
                  className={`w-96 flex items-center gap-2 px-4 py-2 bg-card-bg rounded-lg text-main-text no-underline transition-colors whitespace-nowrap ${
                    isActive(dropdownItem.to)
                      ? 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {dropdownItem.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}
