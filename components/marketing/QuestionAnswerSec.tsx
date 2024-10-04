"use client";
import { QADATA } from "@/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus } from "lucide-react";
import React, { ReactNode, useRef, useState } from "react";

const QuestionAnswerSec = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const moving = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <div
      ref={ref}
      className=" w-full bg-gradient-to-t from-background from-80% to-transparent pt-14 md:p-0 p-5"
    >
      <div className=" max-w-screen-xl  mx-auto  mt-24  h-auto flex flex-col items-center justify-center">
        <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-4xl">
          Frequent <span className=" text-uvibeReb"> Questions </span>
          With Specific Answers
        </div>
        <div className=" w-full mt-5">
          <LayoutGroup>
            {QADATA.map((item, i) => (
              <motion.div
                initial={{
                  x: 20 * i,
                }}
                whileInView={{
                  x: 0,
                  transition: {
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                layout
                key={i}
              >
                <QATEMP
                  question={item.question}
                  answer={item.answer}
                  index={i}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              </motion.div>
            ))}
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

const QATEMP = ({
  question,
  answer,
  index,
  expanded,
  setExpanded,
}: {
  index: number;
  expanded: number | false;
  setExpanded: (index: number | false) => void;
  question: string;
  answer: string | ReactNode;
}) => {
  const isOpen = index === expanded;
  return (
    <motion.section
      initial={false}
      onClick={() => setExpanded(isOpen ? false : index)}
      className={cn(
        "flex cursor-pointer flex-col py-4  select-none",
        index === 0 && "pt-3 sm:pt-4"
      )}
    >
      <motion.h2
        className={cn(
          "text-lg md:text-2xl font-NOTO flex items-center justify-between py-2 transition-all duration-300  ",
          isOpen ? " px-5 bg-foreground/10 rounded-t-2xl" : null
        )}
      >
        <div> {question}</div>
        <div>
          <Plus
            className={cn(
              " transition-all duration-300",
              isOpen ? "rotate-45" : null
            )}
            size={15}
          />
        </div>
      </motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapse"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapse: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <motion.div className="px-5 py-3 bg-foreground/10 pt-5 rounded-b-2xl  text-sm md:text-[0.915rem] font-NOTO  opacity-75 leading-[1.425] text-faq-grayish-purple sm:text-base sm:leading-normal">
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default QuestionAnswerSec;
