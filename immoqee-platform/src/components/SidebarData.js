import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Strona główna",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Nowa firma",
    path: "all_forms",
    icon: <AiIcons.AiFillFolderOpen />,
    cName: "nav-text",
  },
  {
    title: "Dodaj formularz",
    path: "/create_form",
    icon: <IoIcons.IoIosAddCircle />,
    cName: "nav-text",
  },
  {
    title: "Wyloguj się",
    path: "/logout",
    icon: <FaIcons.FaDoorOpen />,
    cName: "nav-text",
  },
];
