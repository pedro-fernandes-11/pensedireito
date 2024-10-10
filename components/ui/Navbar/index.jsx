import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { events } = useRouter();

  const navigation = [
    { title: "Sobre", path: "#sobre" },
    { title: "Atuação", path: "#atuacao" },
    { title: "Localização", path: "#localizacao" },
  ];

  useEffect(() => {
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };
    events.on("routeChangeStart", () => handleState());
    events.on("hashChangeStart", () => handleState());
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header>
      <nav
        className={`bg-[#22221D] w-full md:static md:text-sm md:bg-transparent ${
          state ? "fixed z-10 h-full" : ""
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"
                onClick={handleNavMenu}
              >
                {!state ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    className="w-6 h-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 12H20"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M5 17H20"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M5 7H20"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-10 md:space-y-0 md:text-gray-600">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-slate-200 duration-150 hover:text-slate-400"
                  >
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <NavLink
                  href="https://wa.me/5551986085828"
                  className="block font-medium text-sm text-gray-600 bg-slate-200 hover:bg-slate-400 active:bg-gray-900 md:inline"
                >
                  Entre em contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
