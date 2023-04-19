import React, { useState } from "react";
export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black py-3 fixed top-0 left-0 right-0 shadow-md">
      <button className="ml-4" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
      >
        <div
          className={`${
            open ? "w-80" : "w-0"
          } bg-black/75 min-h-screen w-80 fixed top-0 left-0 transition duration-300 `}
        >
          <div className={`${!open && "hidden"} pt-3`}>
            <button className="ml-4 " onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
