import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import NavDropdown, { DropdownMenu } from './NavDropdown';

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
      // TODO: Add project paths to the dropdown items
      dropdown: [
        { to: '/projects', label: 'Humanoid Robot' },
        { to: '/projects', label: 'Triton Pupper' },
        { to: '/projects', label: 'RoboCup' },
      ],
    },
    { to: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-main-bg shadow-lg transition-all duration-300 ease-in-out ${
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
                <NavDropdown
                  label={item.label}
                  dropdown={item.dropdown}
                  isOpen={openDropdown === item.label}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onItemClick={() => setOpenDropdown(null)}
                />
              ) : (
                <Link
                  to={item.to || '#'}
                  className={`flex items-center px-4 py-2 rounded-lg no-underline transition-colors ${
                    isActive(item.to || '')
                      ? 'text-yellow-400'
                      : 'text-main-text hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/donate"
            className="px-6 py-2 bg-yellow-400 text-button-text font-bold rounded-full hover:bg-slate-400 active:bg-zinc-800 transition-colors z-10"
          >
            DONATE
          </Link>
        </div>
      </nav>

      {openDropdown && (
        <DropdownMenu
          label={openDropdown}
          dropdown={
            navItems.find((item) => item.label === openDropdown)?.dropdown || []
          }
          isOpen={true}
          onItemClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
}
