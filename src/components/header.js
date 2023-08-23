import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
// import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const threshold = 100;

    if (currentScrollPos > prevScrollPos && currentScrollPos > threshold) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos , handleScroll]);
  const navigation = [
    { name: "Hall", href: "#hall" },
    { name: "Living room", href: "#livingRoom" },
    { name: "Dining Area", href: "#dining" },
    { name: "Suites", href: "#suites" },
    { name: "Theater", href: "#theater" },
    { name: "About", href: "#about" },
    // { name: "Services", href: "#services" },
  ];
  return (
    <header
      className={`fixed top-0 min-w-full bg-white z-20 transition-all duration-500 ${
        isHeaderVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex lg:py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="#top" smooth={true} duration={500}>
              {/* <img className="h-8 w-auto" src={Logo} alt="Logo" /> */}
              <h1 className="text-display-md font-semibold cursor-pointer hover:text-neutral-700">
                {" "}
                Luxi{" "}
              </h1>
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="lg:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="my-auto">
              <Button label="CONTACT US" link="#contact" />
            </div> */}
            <div
              onClick={toggleMobileMenu}
              className="space-y-2 visible lg:hidden cursor-pointer p-4"
            >
              <div className="w-8 h-0.5 bg-neutral-700"></div>
              <div className="w-8 h-0.5 bg-neutral-700"></div>
              <div className="w-8 h-0.5 bg-neutral-700"></div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-4 items-center h-auto w-full md:hidden">
            {navigation.map((item) => (
              <Link
                onClick={toggleMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
                key={item.name}
                to={item.href}
                className="text-body-md font-medium text-neutral-700 hover:text-primary-600 p-4 cursor-pointer w-full text-center"
              >
                {item.name}
              </Link>
            ))}
            <span className="w-full h-0.5 bg-gradient-to-l from-transparent via-neutral-700 to-transparent"></span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
