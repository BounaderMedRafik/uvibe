"use client";
import { FELLASPICS, NEWS, RELEASES } from "@/data";
import { ArrowRight, ArrowUpRight, Triangle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <div className=" relative overflow-hidden ">
      <div className=" max-w-screen-xl blur-3xl rounded-full absolute w-full -top-10 bg-gradient-to-t from-background to-uvibeReb/50 h-56  left-1/2 -translate-x-1/2" />
      <div className="  max-w-screen-2xl relative z-20 mx-auto  mt-10 rounded-xl p-10 pt-32 ">
        <div className=" md:text-6xl text-2xl text-center  font-PLAYFAIRE  font-semibold uppercase   ">
          Helping you find your perfect style / With{" "}
          <span className=" text-uvibeReb">UVIBE</span>, Never to worry again
        </div>
        <div className=" md:text-sm text-center text-xs opacity-75 max-w-md mt-2 font-NOTO">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio?
          Aliquam molestias aliquid fugiat impedit.
        </div>
        <div className=" mt-7 flex justify-center  flex-col items-center  ">
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
                  <Triangle size={14} className=" fill-background" />
                </div>
              </div>
            </div>
          </a>
          <div className=" font-NOTO text-xs opacity-75 mt-2">
            1237 Waiter Joined
          </div>
        </div>

        <div className=" mt-5 md:grid  md:grid-cols-4 block gap-6 relative">
          <div className=" col-span-2">
            <NewestStory />
          </div>
          <div className=" col-span-1">
            <Release />
          </div>
          <div className=" col-span-1">
            <Team />
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
          alt={NEWSTORY.title}
        />
      </div>
      <div className=" text-xl mt-2 font-NOTO font-semibold flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className=" text-sm "> {NEWSTORY.title}</div>
        <div className=" text-xs opacity-75 font-medium">{NEWSTORY.date}</div>
      </div>
      <div className=" mt-2 text-xs  md:text-sm max-w-xs  opacity-75 font-NOTO">
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

const Release = () => {
  const LASTRELEASE = RELEASES[RELEASES.length - 1];
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mt-4">
          <div className=" text-xs ">RELEASE</div>
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
          src={LASTRELEASE.thumbnail}
          alt={LASTRELEASE.title}
        />
      </div>
      <div className="  text-xl mt-2 font-NOTO font-semibold flex flex-col md:flex-row md:justify-between md:items-center">
        <div> {LASTRELEASE.title}</div>
        <div className=" text-xs opacity-75 font-medium">
          {LASTRELEASE.date}
        </div>
      </div>
      <div className=" mt-1.5 text-sm max-w-xs opacity-75 font-NOTO">
        {LASTRELEASE.smallDescription}
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

const Team = () => {
  const niggaPic = FELLASPICS[FELLASPICS.length - 1];
  return (
    <div className="h-96">
      <div>
        <div className="flex items-center gap-2 mt-4">
          <div className=" text-xs ">TEAM</div>
          <div className=" w-full h-px bg-foreground  " />
          <Link href={"/"}>
            <div className=" flex items-center gap-2 opacity-50 hover:opacity-75 transition-all">
              <div className=" text-xs ">MEMBERS</div>
              <div>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-full group   mt-2 rounded-xl overflow-hidden relative">
        <img
          className=" h-full w-full   md:group-hover:scale-110 transition-all duration-300 object-cover object-center"
          src={niggaPic.pic}
          alt={niggaPic.pic}
        />
        <div className=" absolute  w-full h-full opacity-100 bg-gradient-to-t from-background/75 to-transparent md:bg-background/75 md:opacity-0 md:group-hover:opacity-100 top-0 left-0 transition-all z-20 p-2 flex items-start justify-end flex-col">
          <div className=" font-semibold">{niggaPic.date}</div>
          <div className=" text-xs opacity-75 mb-0 md:-mb-[100%] md:group-hover:mb-0 transition-all duration-300">
            {niggaPic.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
