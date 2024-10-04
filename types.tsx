import { ReactNode } from "react";

export type NAVLINKTYPE = {
  title: string;
  linkTo: string;
}[];

export type NEWSTYPES = {
  id: string;
  title: string;
  smallDescription: string;
  thumbnail: string;
  date: string;
  content: ReactNode;
}[];

export type PICTYPE = {
  pic: string;
  date: string;
  location: string;
}[];

export type QATYPE = {
  question: string;
  answer: string | ReactNode;
}[];
