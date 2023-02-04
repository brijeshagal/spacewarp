import React, { useState } from "react";
import "./navbar.css";
import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import toast from "react-hot-toast";

const Navbar = () => {
  const { address, isConnected } = useAccount();

    // TODO: Wallaby does not support ENS. Need a separate Ethereu provider to useEnsName
    // const { data: ensName } = useEnsName({ address });
    const { disconnect } = useDisconnect({
        onSuccess() {
            toast("Account disconnected!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
        onError() {
            toast.error("Failed to disconnect account!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
    });
    const { connect } = useConnect({
        chainId: 31415,
        connector: new InjectedConnector(),
        onSuccess() {
            toast.success("Account connected!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
        onError() {
            toast.error("Error connecting account!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
    });

  // const [clicked, setClicked] = useState(false);

  // const handleClick = e =>{
  // 	setClicked(clk => !clk);
  // 	const dd = document.querySelector("#pclick");
  // 	dd.classList.toggle('hidden');
  // }

  const handleMouse = (e) => {
    const dd = document.querySelector("#pclick");
    dd.classList.remove("hidden");
  };

  const mouseOut = (e) => {
    const dd = document.querySelector("#pclick");
    setTimeout(function () {
      dd.classList.add("hidden");
    }, 2000);
  };

  return (
    // <div className='p-4 w-full bg-slate-800 text-white text-lg'>Navbar</div>
    <nav className="bg-[#4e0404]  z-[60] border-b border-[#600000] shadow-lg shadow-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            {/* <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span> */}
            {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
            {/* <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg> */}
            {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
            {/* <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-8 w-auto lg:hidden"
              src="https://img.icons8.com/ultraviolet/512/duolingo-logo.png"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://img.icons8.com/ultraviolet/512/duolingo-logo.png"
              alt="Your Company"
            />
          </div>
          <div className="flex flex-1 items-stretch md:items-center justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="/"
                  className="selectedd px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-[#5c1c1c] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-[#5c1c1c] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-[#5c1c1c] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              // Heroicon name: outline/bell
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button> */}

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onMouseEnter={handleMouse}
                  onMouseLeave={mouseOut}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
            {isConnected?
              <div
                onMouseEnter={handleMouse}
                onMouseLeave={mouseOut}
                className="absolute hidden bg-[#862626] p-1 right-0 z-10 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                id="pclick"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#6b2828]"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  {address.slice(0,8)+"..."+address.slice(-5)}
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#6b2828]"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Your Profile
                </a>
                {/* <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#6b2828]"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a> */}
              </div>:<div className="">Connect Button</div>
            }</div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div> */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
