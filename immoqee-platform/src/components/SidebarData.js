import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Strona główna",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Wszystkie formularze",
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
];
