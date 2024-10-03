"use client";
import { EXTRANAVLINKS, NAVLINKS } from "@/data";
import MyLogo from "../brand/MyLogo";
import { buttonVariants } from "../ui/button";
import { TbMenu } from "react-icons/tb";
import { Key, useState } from "react";
import { cn } from "@/lib/utils";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center justify-center fixed z-40 w-full top-4 ">
      <div className="flex relative bg-background  shadow-2xl shadow-black/10 items-center gap-14 px-4 py-2 border border-foreground/10 rounded-xl">
        <div>
          <MyLogo />
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 mt-0.5">
            {NAVLINKS.map((item, i) => (
              <a href={item.linkTo} key={i}>
                <div className="px-3 py-0.5 group hover:opacity-100 text-sm font-NOTO opacity-75 transition-all duration-300">
                  <div>{item.title}</div>
                  <div className=" group-hover:w-full bg-foreground h-px  w-0 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className={cn(
              "p-2 hover:bg-foreground/10 rounded-sm cursor-pointer  transition-all duration-300",
              show ? "bg-foreground text-background hover:bg-foreground/70" : ""
            )}
          >
            {show ? <GrFormClose size={15} /> : <TbMenu size={15} />}
          </div>
        </div>

        {/* content table */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={show ? "chigga" : "nigga"}
              initial={{
                y: -200,
                opacity: 0,
                filter: `blur(10px)`,
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: `blur(0px)`,
                transition: {
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              exit={{
                y: -200,
                filter: `blur(20px)`,
                transition: {
                  ease: [0.5, 0, 0.75, 0],
                },
              }}
              className="absolute w-full font-NOTO top-14 bg-background  p-2.5 rounded-md shadow-2xl shadow-black/10 z-50  left-0 border border-foreground/10"
            >
              <div className="flex items-center gap-2">
                <div className=" text-sm ">SECTIONS</div>
                <div className=" w-full h-px bg-foreground  " />
              </div>
              <div className=" grid grid-cols-5 mt-2.5 gap-1.5 gap-y-3">
                {EXTRANAVLINKS.map((item, i) => (
                  <motion.div
                    initial={{
                      y: -10,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: [0.25, 1, 0.5, 1],
                        delay: i * 0.1,
                      },
                    }}
                    key={i}
                  >
                    <a href={item.linkTo} key={i}>
                      <div className=" group hover:opacity-100 flex items-center gap-2 text-xs font-NOTO opacity-75 transition-all duration-300">
                        <div className=" font-medium">{item.title}</div>
                        <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-6 group-hover:ml-0">
                          <MdOutlineArrowOutward size={12} />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
              <div className=" grid grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className=" text-sm ">NEWS</div>
                    <div className=" w-full h-px bg-foreground  " />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className=" text-sm text-uvibeReb ">IMPORTANT</div>
                    <div className=" w-full h-px bg-uvibeReb  " />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navigation;
