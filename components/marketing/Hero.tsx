import { NEWS } from "@/data";
import React from "react";
import { buttonVariants } from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className=" max-w-screen-xl blur-3xl rounded-full absolute w-full -top-10 bg-gradient-to-t from-background to-uvibeReb/50 h-56  left-1/2 -translate-x-1/2" />
      <div className="  max-w-screen-2xl relative z-20 mx-auto h-svh mt-10 rounded-xl p-10 pt-32 ">
        <div className=" text-6xl  font-PLAYFAIRE  font-semibold uppercase   ">
          Helping you find your perfect style / With{" "}
          <span className=" text-uvibeReb">UVIBE</span>, Never to worry again
        </div>
        <div className=" text-sm opacity-75 max-w-md mt-2 font-NOTO">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio?
          Aliquam molestias aliquid fugiat impedit.
        </div>

        <div className=" mt-3">
          <a href="">
            <div
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              <div className="flex items-center  gap-3">
                <div className=" font-NOTO">JOIN THE WAIT LIST</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </a>
          <div className=" font-NOTO text-xs opacity-75 mt-2">
            1237 Waiter Joined
          </div>
        </div>

        <div className=" mt-5 grid  grid-cols-2 gap-3">
          <div>
            <NewestStory />
          </div>
        </div>
      </div>
    </div>
  );
};

const NewestStory = () => {
  const NEWSTORY = NEWS[NEWS.length - 1];

  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mt-4">
          <div className=" text-xs ">STORY</div>
          <div className=" w-full h-px bg-foreground  " />
          <Link href={"/"}>
            <div className=" flex items-center gap-2 opacity-50 hover:opacity-75 transition-all">
              <div className=" text-xs ">ALL</div>
              <div>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className=" mt-2  rounded-2xl overflow-hidden h-64">
        <img
          className=" h-full w-full object-cover object-center"
          src={NEWSTORY.thumbnail}
          alt=""
        />
      </div>
      <div className=" text-xl mt-2 font-NOTO font-semibold flex justify-between items-center ">
        <div> {NEWSTORY.title}</div>
        <div className=" text-xs opacity-75 font-medium">{NEWSTORY.date}</div>
      </div>
      <div className=" mt-2 text-sm max-w-xs opacity-75 font-NOTO">
        {NEWSTORY.smallDescription}
      </div>
      <div className=" mt-4">
        <a href={``}>
          <div
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <div className=" font-NOTO flex items-center gap-2">
              <div>CHECK NOW</div>
              <div>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
