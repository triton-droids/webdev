import { Link, useLocation } from 'react-router-dom';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  dropdown: DropdownItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onItemClick: () => void;
}

export default function NavDropdown({
  label,
  dropdown,
  isOpen,
  onMouseEnter,
}: NavDropdownProps) {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
          isOpen
            ? 'bg-zinc-800 text-main-text'
            : dropdown.some((d) => isActive(d.to))
              ? 'text-yellow-400 hover:text-yellow-400'
              : 'text-main-text hover:text-yellow-400'
        }`}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
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
  );
}

export function DropdownMenu({
  label,
  dropdown,
  isOpen,
  onItemClick,
}: {
  label: string;
  dropdown: DropdownItem[];
  isOpen: boolean;
  onItemClick: () => void;
}) {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  if (!isOpen) return null;

  return (
    <div className="px-8 pb-4">
      <div className="flex gap-6 justify-center">
        {dropdown.map((dropdownItem) => (
          <Link
            key={`${label}-${dropdownItem.label}`}
            to={dropdownItem.to}
            className={`group w-96 flex items-center px-4 py-2 bg-zinc-800 rounded-lg no-underline transition-all duration-300 ease-in-out whitespace-nowrap ${
              isActive(dropdownItem.to) ? 'text-accent' : 'text-main-text'
            } hover:bg-slate-400 hover:text-stone-950`}
            onClick={onItemClick}
          >
            <span className="flex-shrink-0">{dropdownItem.label}</span>
            <span className="spacer flex-shrink w-0 transition-all duration-700 ease-in-out"></span>
            <svg
              className="w-4 h-4 ml-2 flex-shrink-0"
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
  );
}
