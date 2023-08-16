import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#works" },
  ];
  return (
    <header className={`fixed top-0 min-w-full bg-white z-20 bg-white transition-all duration-500 ${isHeaderVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>
      <div className="container mx-auto ">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="#top" smooth={true} duration={500}>
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button label="CONTACT US" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
