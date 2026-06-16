"use client";

import { motion } from "framer-motion";

const data = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 100)
);

const ActivityCard=()=> {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl">
      <h3 className="mb-4 font-medium">Activity</h3>

      <div className="flex items-end gap-1 h-20">
        {data.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: value }}
            transition={{ delay: i * 0.05 }}
            className="w-2 bg-green-500 rounded"
          />
        ))}
      </div>
    </div>
  );
}


export default ActivityCard;