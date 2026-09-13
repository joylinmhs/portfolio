// "use client";

// import { motion } from "framer-motion";

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="bg-black px-6 py-24 text-white"
//     >
//       <motion.div
//         className="mx-auto max-w-7xl"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
//           SKILLS
//         </p>

//         <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//           Technologies I work with.
//         </h2>
//       </motion.div>
//     </section>
//   );
// }

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
          SKILLS
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Technologies I work with.
        </h2>
      </div>
    </section>
  );
}