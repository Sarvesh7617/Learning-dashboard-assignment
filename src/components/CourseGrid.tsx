"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const CourseGrid=({ courses }: any)=> {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {courses?.map((course: any) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{ scale: 1.03 }}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}


export default CourseGrid;