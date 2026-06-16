"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

const Sidebar=()=> {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex flex-col gap-2 relative">
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>

      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative flex items-center gap-3 p-3 rounded-lg"
          >
            {isActive && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 bg-zinc-800 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            <span className="relative -ml-5 md:ml-0 z-10 flex items-center gap-3 text-xs md:text-lg">
              <Icon className={`w-4 md:w-${18}`}/>
              {item.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}


export default Sidebar;
