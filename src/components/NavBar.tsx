import { useState } from "react";

export default function NavBar() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="mt-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer hover:scale-110 drop-shadow-lg shadow-slate-400"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
