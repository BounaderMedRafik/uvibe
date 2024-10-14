import { NEWS } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const StoriesPageContent = () => {
  return (
    <div className="  max-w-screen-md mx-auto pt-36 px-5 md:px-0 min-h-screen">
      <div className="  text-xl font-PLAYFAIRE">Stories</div>
      <div className=" text-sm font-NOTO max-w-xs opacity-75">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, alias?
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-4">
        {NEWS.slice()
          .reverse()
          .map((item, i) => (
            <Link href={`/stories/${item.id}`}>
              <div
                className=" hover:opacity-75 group transition-all duration-300"
                key={i}
              >
                <img
                  className=" h-44 w-full  object-cover rounded-xl"
                  src={item.thumbnail}
                />
                <div className=" group-hover:px-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between py-2.5">
                    <div className=" text-sm opacity-100 font-NOTO">
                      {item.title}
                    </div>
                    <div>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                  <div>
                    <div className=" text-xs  w-2/4 opacity-50">
                      {item.smallDescription}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default StoriesPageContent;
