"use client";
import { DOMAIN, NEWS } from "@/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiCheck, BiPaperPlane } from "react-icons/bi";
import { buttonVariants } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

const SingularStoryContent = ({ id }: { id: string }) => {
  const Story = NEWS.filter((item) => item.id == id)[0];

  const [Hover, setHover] = useState("all");

  const path = usePathname();
  const [copiedText, setCopiedText] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(true);
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  };
  return (
    <div>
      {Story ? (
        <div className=" pt-32  max-w-screen-lg mx-auto font-NOTO">
          <div>
            <Link href={"/stories"}>
              <div className=" flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300">
                <div>
                  <ArrowLeft size={13} />
                </div>
                <div>Get Back</div>
              </div>
            </Link>
          </div>

          <div>
            <img
              src={Story.thumbnail}
              className=" w-full h-44 object-cover rounded-md mb-5 mt-2"
              alt=""
            />
          </div>
          <div className=" text-xs opacity-75 mt-6">{Story.date}</div>
          <div className="text-xl mt-3 flex items-center justify-between">
            <div>
              <div>{Story.title}</div>
              <div className=" text-sm opacity-75 font-NOTO  max-w-xs">
                {Story.smallDescription}
              </div>
            </div>
            <div
              onClick={() => {
                handleCopy(`${DOMAIN}${path}`);
              }}
              className="flex opacity-75 cursor-pointer  hover:opacity-100 items-center  transition-all duration-300"
            >
              {copiedText ? <BiCheck /> : <BiPaperPlane />}
            </div>
          </div>

          <div className=" mt-7 pb-3 border-b">{Story.content}</div>
        </div>
      ) : (
        <div className=" min-h-[60vh] flex  justify-center pt-32">
          {" "}
          {!Story ? (
            <div className="py-10 flex flex-col gap-2 items-start justify-center opacity-75">
              <div> The Story you searching does not exist {`( ◡̀_◡́)ᕤ`}</div>
              <div>
                {" "}
                <Link href={"/Storys"}>
                  <div className=" flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300">
                    <div>
                      <ArrowLeft size={13} />
                    </div>
                    <div>See Storys</div>
                  </div>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SingularStoryContent;
