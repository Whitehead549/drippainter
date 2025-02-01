import React from 'react';
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "About",
    link: "/about",
    id: 2,
  },
  {
    name: "Paintings",
    link: "/painting",
    id: 3,
  },
  {
    name: "Contact",
    link: "/contact",
    id: 4,
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu}) => {

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-[63%] w-[50%] flex-col justify-between bg-[#FAFAFA] px-8 pb-0 pt-12 transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* Top section */}
       
        {/* Navlinks section */}
        <div className='text-black mt-14'> {/* Changed to text-black */}
        <ul className='space-y-1 text-xl'>
          {
            navbarLinks.map(({ name, link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className='mb-5 inline-block text-black' 
                >
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      </div>
    </div>
  );
};

export default ResponsiveMenu;
