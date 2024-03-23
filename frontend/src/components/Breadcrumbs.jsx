import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <span className="breadcrumb">
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                pathname
              ) : (
                <Link to={routeTo}>{pathname}</Link>
              )}
            </span>
          );
        })}
      </span>
    </nav>
  );
}

export default Breadcrumbs;
