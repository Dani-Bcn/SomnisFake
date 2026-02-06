import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [openTop5, setOpenTop5] = useState(false);
  const closeTimeout = useRef(null);

  const menuItems = [
    { label: "Top 5", path: "/top5" },
    { label: "Viscoelastica", path: "/viscoelastica" },
    { label: "Molles", path: "/molles" },
    { label: "Ensacades", path: "/ensacades" },
    { label: "Normablock", path: "/normablock" },
    { label: "Articulables", path: "/articulables" },
    { label: "Juvenil", path: "/juvenil" },
    { label: "Bultex", path: "/bultex" },
  ];

  const top5Items = [
    { label: "Nº 1 · #75 ANIVERSARI", path: "/aniversari" },
    { label: "Nº 2", path: "/america" },
    { label: "Nº 3", path: "/africa" },
  ]

  const handleEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenTop5(true);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenTop5(false);
    }, 180); // delay de cierre
  };

  return (
    <div className="hidden lg:flex w-1/2 h-20 lg items-center text-sm justify-end text-amber-200 gap-4 z-50 montserrat-regular">
      {menuItems.map((item) =>
        item.label === "Top 5" ? (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <h3 className="cursor-pointer hover:text-blue-500 transition ">
              {item.label}
            </h3>

            {/* DESPLEGABLE */}
            <div
              className={`
                absolute top-full left-0  pt-2
                transition-all duration-200 ease-out
                ${openTop5
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"}
              `}
            >
              <div className="bg-red/50 backdrop-blur-xl rounded-md shadow-lg min-w-[220px]">
                {top5Items.map((subItem) => (
                  <div
                    key={subItem.path}
                    className="px-4 py-2 cursor-pointer hover:bg-red-900 hover:text-white transition "
                    onClick={() => navigate(subItem.path)}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h3
            key={item.path}
            className="cursor-pointer hover:text-blue-500 transition duration-300"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </h3>
        )
      )}
    </div>
  );
}