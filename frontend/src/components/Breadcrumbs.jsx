import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Breadcrumbs.css"

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Construct the breadcrumbs array
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/categories' },
    ...pathnames.map((pathname, index) => ({ label: pathname }))
  ];

  return (
    <nav className='breadcrumb-component' aria-label="breadcrumb">
      <span className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => {
          const routeTo = `/${breadcrumbs.slice(0, index + 1).map(item => item.label).join('/')}`;
          const isLast = index === breadcrumbs.length - 1;

          return (
            <span key={index}>
              <span className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast ? (
                  breadcrumb.label // Use breadcrumb.label for the "Home" and "Category" breadcrumbs and other breadcrumbs
                ) : (
                  <Link to={breadcrumb.link}>{breadcrumb.label}</Link> // Use breadcrumb.link for the "Home" and "Category" breadcrumbs and breadcrumb.label for other breadcrumbs
                )}
              </span>
              {!isLast && <span className="breadcrumb-separator">{' > '}</span>} {/* Separator */}
            </span>
          );
        })}
      </span>
    </nav>
  );
}

export default Breadcrumbs;
