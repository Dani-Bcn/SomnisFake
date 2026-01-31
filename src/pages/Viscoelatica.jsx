import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

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

  return (
    <div className="w-1/2 h-20 flex items-center text-sm justify-end text-amber-200 gap-4 z-50 montserrat-regular">
      {menuItems.map((item) => (
        <h3
          key={item.path}
          className="cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </h3>
      ))}
    </div>
  );
}