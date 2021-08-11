import React from "react"
import { AiFillLayout } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import { BsFillPuzzleFill } from "react-icons/bs";
import { AiFillSlackCircle } from "react-icons/ai";


export const SideBarData = [
  {
    title: "OverView",
    path: "/overview",
    icon: <AiFillLayout />,
    cName: "nav-text"
  },
  {
    title: "All Product",
    path: "/product",
    icon: <BsFillArchiveFill />,
    cName: "nav-text"
  },
  {
    title: "Add Product",
    path: "/addproduct",
    icon: <BsFillPlusCircleFill />,
    cName: "nav-text"
  },
  {
    title: "Sales",
    path: "/sales",
    icon: <BsFillInboxesFill />,
    cName: "nav-text"
  },
  {
    title: "Feed Back",
    path: "/feed",
    icon: <BsFillPuzzleFill />,
    cName: "nav-text"
  },
  {
    title: "Order/Dispatch",
    path: "/order",
    icon: <AiFillSlackCircle />,
    cName: "nav-text"
  }
]


