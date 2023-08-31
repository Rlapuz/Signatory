"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Menus from "../menus/Menus";
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  useEffect(() => {
    setIsOpen(isTab ? false : true);
    // false mobile & true laptop
  }, [isTab]);

  const Sidebar_animation = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // system view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <aside>
      {/* for mobile view when open the sidebar it change color of bg of main */}
      {isTab && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
            isOpen ? "block" : "hidden"
          }`}></div>
      )}
      <motion.div
        variants={Sidebar_animation}
        // initial = {{x: isTab ? -250 : 0}}
        animate={isOpen ? "open" : "closed"}
        className="bg-gray-50 text-gray rounded-md shadow-lg z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed">
        {/* logo sidebar */}
        <div className="flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3">
          <Image
            src="/bsu_logo.png"
            width={45}
            height={0}
            alt="bsu logo"
          />
          <Link
            href="/"
            className="text-xl whitespace-pre font-bold">
            File Management
          </Link>
        </div>

        {/* menus */}
        <Menus />

        {/* control button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -130,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden">
          <IoIosArrowBack
            size={25}
            className="text-blue-500"
          />
        </motion.div>
      </motion.div>
      {/* the menu icon for mobile */}
      <div
        className="ml-5 mt-5 md:hidden flex absolute"
        onClick={() => setIsOpen(true)}>
        <FiMenu size={25} />
      </div>
    </aside>
  );
};

export default Sidebar;
