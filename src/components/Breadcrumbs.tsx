import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-slate-100 border-b border-slate-200/60 py-3 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
          <li>
            <Link to="/" className="hover:text-brand-600 transition-colors flex items-center">
              <Home className="w-3.5 h-3.5" />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                {isLast ? (
                  <span className="text-slate-800 font-bold">{label}</span>
                ) : (
                  <Link to={to} className="hover:text-brand-600 transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
