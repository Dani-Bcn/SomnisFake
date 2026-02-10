import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const menuItems = [
  "Aniversari",
  "Viscoelastica",
  "Molles",
  "Ensacades",
  "Normablock",
  "Articulables",
  "Juvenil",
  "Bultex",
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <main className="lg:hidden z-250">
   
      <header className=" w-10 flex items-center justify-between p-2 bg-white shadow-md z-50">
     
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 z-50"
        >
          <span className={`w-6 h-0.5 bg-black transition ${open && "rotate-45 translate-y-1.5"}`} />
          <span className={`w-6 h-0.5 bg-black transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-0.5 bg-black transition ${open && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </header>

      {/* Menú */}
      <nav
        ref={menuRef}
        className=" fixed top-0 right-0 w-full md:w-1/3 h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 text-xl font-medium translate-x-full z-40"
      >
        {menuItems.map((item) => (
          <a
            key={item}
              href={`/${item.toLowerCase()}`}
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </main>
  );
}
