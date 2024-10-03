import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import logo from "../assets/logo1.png";
import { navItems } from "../Constants/Data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg bg-white/30 bg-gradient-to-r from-white/20 to-[#dad7cd]/30 border-b border-[#3a5a40] shadow-xl transition duration-500 ease-in-out">
      <div className="lg:container mx-auto relative lg:text-sm">
        <div className="flex-col justify-between items-center">
          <div className="flex items-center justify-between max-sm:flex-col lg:flex-shrink-0">
            <h1 className="text-xl font-bold max-sm:font-normal">
              GSTIN:33CFCPV1527C1ZT
            </h1>
            <span className="flex items-center lg:ml-[-30px]">
              <Link to="/" className="flex items-center">
                <img
                  className="h-20 w-25 translate-y-1 translate-x-4 max-sm:ml-[-30px] drop-shadow-lg"
                  src={logo}
                  alt="Logo"
                />
                <span className="text-2xl font-bold tracking-tight font-unbounded text-[#3a5a40] hover:scale-110 transform transition duration-500 ease-in-out">
                  Mayan Exim Global Transit
                </span>
              </Link>
              <div className="lg:hidden md:flex flex-col justify-end max-sm:mr-[10px]">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
              </div>
            </span>

            <span className="max-sm:hidden">
              <a
                href="/logo1.png"
                download="pdf"
                className="py-2 px-5 text-center w-[140px] rounded-md bg-[#3a5a40] ring-2 ring-[#3a5a40] text-[#dad7cd] hover:bg-[#a1b189] hover:text-white neon-button transition duration-300 transform hover:scale-110 shadow-lg"
              >
                Get a Quote
              </a>
            </span>
          </div>

          <hr className="mb-[10px] max-sm:hidden" />

          {/* nav items */}
          <ul className="max-md:hidden flex justify-center mx-auto w-full items-center space-x-[80px]">
            {navItems.map((item, index) => (
              <Link to={`/${item.label === "Home" ? "" : item.label}`} key={index}>
                <li>
                  <a
                    href={item.href}
                    className="hover:text-[#dad7cd] text-[#3a5a40] hover:bg-[#3a5a40] px-4 py-2 rounded-md hover:shadow-lg hover:scale-110 transition duration-500 transform hover:neon-glow"
                  >
                    {item.label}
                  </a>
                </li>
              </Link>
            ))}
            <button
              onClick={scrollToFooter}
              className="py-2 px-4 w-[120px] rounded-md bg-gradient-to-r from-[#3a5a40] to-[#a1b189] text-[#dad7cd] hover:bg-[#a1b189] hover:scale-105 hover:shadow-lg transition-all duration-500 shadow-md"
            >
              Contact
            </button>
          </ul>

          <hr className="max-sm:hidden mt-[10px] mb-[5px]" />
        </div>

        {/* Mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#3a5a40] text-[#dad7cd] w-full p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-500 ease-in-out backdrop-blur-lg">
            <ul>
              {navItems.map((item, index) => (
                <Link to={`/${item.label === "Home" ? "" : item.label}`} key={index}>
                  <li className="py-4 text-xl hover:bg-[#a1b189] px-6 rounded-md transition-all duration-500 ease-in-out">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="py-2 px-4 border rounded-md bg-[#dad7cd] text-[#3a5a40] hover:bg-[#a1b189] hover:scale-110 hover:shadow-lg transition-transform duration-500"
              >
                Get a Quote
              </a>
              <p
                className="py-2 px-4 rounded-md bg-gradient-to-r from-[#dad7cd] to-[#a1b189] text-[#3a5a40] hover:scale-110 hover:shadow-lg transition-transform duration-500 cursor-pointer"
                onClick={scrollToFooter}
              >
                Contact
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
