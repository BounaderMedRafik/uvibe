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
