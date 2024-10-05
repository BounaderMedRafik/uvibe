"use client";
import { EXTRANAVLINKS, important, NAVLINKS, NEWS } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbHours12, TbMenu } from "react-icons/tb";
import MyLogo from "../brand/MyLogo";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{
        y: -60,
      }}
      animate={{
        y: 0,
        transition: {
          ease: [0.25, 1, 0.5, 1],
        },
      }}
      className="flex items-center justify-center fixed z-40 w-full top-4 "
    >
      <div className="flex relative bg-background  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center gap-14 px-4 py-2 border border-foreground/10 rounded-xl">
        <div>
          <MyLogo big={false} />
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
          {/* <div>
            <Button variant={"primary"}>
              <div className="flex items-center  gap-2">
                <div>SIGN IN</div>
                <div>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Button>
          </div> */}
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
          <div>
            <ModeToggle />
          </div>
        </div>

        {/* content table */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={show ? "chigga" : "nigga"}
              initial={{
                transform:
                  "perspective(1000px) rotateX(-45deg) rotateY(0deg) translateY(-300px)",
                transformStyle: "preserve-3d",
                y: -200,
                opacity: 0,
                filter: `blur(10px)`,
              }}
              animate={{
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                transformStyle: "preserve-3d",
                y: 0,
                opacity: 1,
                filter: `blur(0px)`,
                transition: {
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              exit={{
                transform:
                  "perspective(1000px) rotateX(-45deg) rotateY(0deg) translateY(-300px)",
                transformStyle: "preserve-3d",
                y: -200,
                filter: `blur(20px)`,
                transition: {
                  ease: [0.5, 0, 0.75, 0],
                },
              }}
              className="absolute w-full font-NOTO top-14 bg-background  p-2.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50  left-0 border border-foreground/10"
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
                  <div className=" mt-1.5">
                    <LastNews
                      id={NEWS[NEWS.length - 1].id}
                      title={NEWS[NEWS.length - 1].title}
                      smallDescription={NEWS[NEWS.length - 1].smallDescription}
                      thumbnail={NEWS[NEWS.length - 1].thumbnail}
                      date={NEWS[NEWS.length - 1].date}
                      content={NEWS[NEWS.length - 1].content}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className=" text-sm text-uvibeReb ">IMPORTANT</div>
                    <div className=" w-full h-px bg-uvibeReb  " />
                  </div>
                  <div className="">
                    <Important />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const LastNews = ({
  id,
  title,
  smallDescription,
  thumbnail,
  date,
  content,
}: {
  id: string;
  title: string;
  smallDescription: string;
  thumbnail: string;
  date: string;
  content: ReactNode;
}) => {
  return (
    <Link href="">
      <div className=" group ">
        <div className=" w-full h-32 relative overflow-hidden rounded-lg">
          <div className=" w-full h-full absolute top-0 transition-all left-0 opacity-0 group-hover:opacity-100 bg-background/75 flex items-center justify-center">
            <MdOutlineArrowOutward
              className=" mt-10 group-hover:mt-0 transition-all duration-300"
              size={24}
            />
          </div>
          <img
            className=" h-full w-full object-cover object-center"
            src={thumbnail}
            alt={title}
          />
        </div>

        <div className=" font-NOTO font-medium  mt-2 line-clamp-1   ">
          {title}
        </div>
        <div className="  font-NOTO  text-xs  opacity-75">
          {smallDescription}
        </div>
        <div className=" mt-2 opacity-75 flex items-center gap-3 font-NOTO text-xs">
          <div>{date}</div>
          <div>
            <TbHours12 />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Important = () => {
  return (
    <Link href={important.link} className=" group">
      <div className=" bg-foreground h-56 overflow-hidden   mt-1.5 rounded-lg relative border border-uvibeReb">
        <div className="  absolute  w-full h-full bg-gradient-to-t from-background to-transparent md:bg-background/75 opacity-0 group-hover:opacity-100 transition-all z-20 p-2 flex items-start justify-end flex-col">
          <div className=" font-semibold">{important.title}</div>
          <div className=" text-xs opacity-75 -mb-[100%] group-hover:mb-0 transition-all duration-300">
            {important.description}
          </div>
        </div>
        <img
          className=" w-full h-full object-cover object-center"
          src={important.image}
          alt={important.title}
        />
      </div>
    </Link>
  );
};

export default Navigation;
