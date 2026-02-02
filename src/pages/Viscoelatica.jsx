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
    <div>
      <h1>Viscoelástica</h1>
    </div>
  );
}