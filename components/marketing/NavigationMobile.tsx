"use client";
import { EXTRANAVLINKS, NEWS } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbHours12, TbMenu } from "react-icons/tb";
import MyLogo from "../brand/MyLogo";
import { ModeToggle } from "../ui/ModeToggle";

const NavigationMobile = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        "  w-screen fixed top-0 left-0 z-50 transition-all  ",
        show
          ? "border-none border-transparent"
          : " border-b border-foreground/10"
      )}
    >
      <div className="flex items-center  justify-between w-full px-4 py-2 bg-background relative z-50">
        <div>
          <MyLogo big={false} />
        </div>
        <div className=" flex items-center">
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
      </div>

      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial={{
              y: "-100%",
              filter: `blur(10px)`,
              opacity: 0,
            }}
            animate={{
              y: 0,
              filter: `blur(0px)`,
              opacity: 1,
              transition: {
                ease: [0.25, 1, 0.5, 1],
              },
            }}
            exit={{
              filter: `blur(10px)`,
              opacity: 0,
              y: "-100%",
              transition: {
                ease: [0.5, 0, 0.75, 0],
              },
            }}
            key={show ? "libba" : "chibba"}
            className=" h-auto p-2 bg-background border-b border-b-foreground/10 relative z-20  "
          >
            <div>
              <div className="flex items-center gap-2 mt-4">
                <div className=" text-xs text-uvibeReb ">IMPORTANT</div>
                <div className=" w-full h-px bg-uvibeReb  " />
              </div>
              <div>
                <Important />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <div className=" text-xs ">NEWS</div>
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
                <div className=" text-xs ">SECTIONS</div>
                <div className=" w-full h-px bg-foreground  " />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
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
                  <a href={item.linkTo}>
                    <div className=" flex text-xs border-foreground/25 gap-3 opacity-75 border rounded-lg items-center justify-center p-2">
                      <div>{item.title}</div>
                      <div>
                        {" "}
                        <MdOutlineArrowOutward size={12} />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
    <Link href={``}>
      <div className=" group ">
        <div className=" w-full h-32 relative overflow-hidden rounded-lg">
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
    <Link href={"/"} className=" group">
      <div className=" bg-foreground h-32 overflow-hidden   mt-1.5 rounded-lg relative border border-uvibeReb">
        <div className=" absolute  w-full h-full bg-background/75  transition-all z-20 p-2 flex items-start justify-end flex-col">
          <div className=" font-semibold">UVIBE v0.2</div>
          <div className=" text-xs opacity-75   transition-all duration-300">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </div>
        </div>
        <img
          src="https://i.pinimg.com/564x/61/d3/a3/61d3a39b8f00de84e1586fcbea82d2bd.jpg"
          alt=""
        />
      </div>
    </Link>
  );
};

export default NavigationMobile;
