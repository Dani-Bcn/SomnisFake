import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openMolles, setOpenMolles] = useState(false);
  const [openNorma, setOpenNorma] = useState(false);
  const [openArtuculable, setOpenArticulable] = useState(false);
  const [openJuvenil, setOpenJuvenil] = useState(false);
  const [openBultex, setOpenBultex] = useState(false);

  return (
    <div className="hidden lg:flex  h-20 items-center text-sm justify-end font-black text-amber-500 gap-6 z-250 montserrat-regular">
      <h3
        onClick={() => navigate("/aniversari")}
        className="cursor-pointer hover:text-indigo-500 transition duration-500"
      >
        75 Aniversari
      </h3>

      {/* Desplegable Viscoelástica */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Viscoelástica
        </h3>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/viscoelastica")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Viscoelástica
              </span>

              <span
                onClick={() => navigate("/somiador-plus")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Somiador Plus
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Molles ensacades */}
      <div
        className="relative"
        onMouseEnter={() => setOpenMolles(true)}
        onMouseLeave={() => setOpenMolles(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Molles ensacades
        </h3>

        <AnimatePresence>
          {openMolles && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/molles-ensacades")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Molles ensacades
              </span>

              <span
                onClick={() => navigate("/sleep")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Sleep
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setOpenNorma(true)}
        onMouseLeave={() => setOpenNorma(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Normablock
        </h3>

        <AnimatePresence>
          {openNorma && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/normablock")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Normablock
              </span>

              <span
                onClick={() => navigate("/aniversari")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                75 Aniversari
              </span>
              <span
                onClick={() => navigate("/arce")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Arce
              </span>
              <span
                onClick={() => navigate("/king")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                King
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setOpenArticulable(true)}
        onMouseLeave={() => setOpenArticulable(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Articulables
        </h3>
        <AnimatePresence>
          {openArtuculable && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/articulables")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Articulables
              </span>

              <span
                onClick={() => navigate("/bultex_bit_art")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Bultex Bit Art
              </span>
              <span
                onClick={() => navigate("/art20_nova")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Art20 Nova
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setOpenJuvenil(true)}
        onMouseLeave={() => setOpenJuvenil(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Juvenil
        </h3>
        <AnimatePresence>
          {openJuvenil && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/Juvenil")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Juvenil
              </span>
              <span
                onClick={() => navigate("/apple")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Apple
              </span>
              <span
                onClick={() => navigate("/huracan")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Huracán
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="relative"
        onMouseOver={() => setOpenBultex(true)}
        onMouseOut={() => setOpenBultex(false)}
      >
        <h3 className="cursor-pointer hover:text-indigo-500 transition duration-500">
          Bultex
        </h3>
        <AnimatePresence>
          {openBultex && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-amber-900 text-amber-200 rounded shadow-lg flex flex-col min-w-[180px] overflow-hidden"
            >
              <span
                onClick={() => navigate("/bultex")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Bultex
              </span>
              <span
                onClick={() => navigate("/bultex_bit")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Bultex bit
              </span>
              <span
                onClick={() => navigate("/bultex_sim")}
                className="px-4 py-2 hover:bg-amber-800 cursor-pointer"
              >
                Bultex sim
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
