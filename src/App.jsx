import React, { useState, useEffect } from 'react'; // Correct import for React hooks
import { Link, Outlet } from 'react-router-dom'; // For routing
import {
  Navbar,
  MobileNav,
  Typography,
} from "@material-tailwind/react"; // Material Tailwind Components
import './App.css';

function App() {
  return (
    <div>
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Content Section */}
      <div>
        <Outlet /> {/* Placeholder for child routes */}
      </div>
    </div>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  // Close MobileNav on window resize for larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center"
        >
          <Link to="/produk">Produk</Link>
        </Typography>
      </li>
      <li className="p-1 font-normal">
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center"
        >
          <Link to="/product">Product</Link>
        </Typography>
      </li>
      <li className="p-1 font-normal">
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center"
        >
          <Link to="/dataproduk">Data Produk</Link>
        </Typography>
      </li>
      <li className="p-1 font-normal">
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center"
        >
          <Link to="/camera">Camera</Link>
        </Typography>
      </li>
      <li className="p-1 font-normal">
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center"
        >
          <Link to="/register">Regsiter</Link>
        </Typography>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Link to="/">Home</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* MobileNav Toggle */}
            <button
              onClick={() => setOpenNav(!openNav)}
              className="lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    openNav
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}


export default App;
