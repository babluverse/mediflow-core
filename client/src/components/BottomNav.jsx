import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, LayoutDashboard, User } from 'lucide-react';

function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/booking', label: 'Book', icon: Calendar },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/login', label: 'Account', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-navy-light border-t border-white/10 flex justify-around items-center py-3 px-2">
      {navItems.map(({ path, label, icon: Icon }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
              isActive ? 'text-teal-light' : 'text-white/50'
            }`}
          >
            <Icon size={22} />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default BottomNav;