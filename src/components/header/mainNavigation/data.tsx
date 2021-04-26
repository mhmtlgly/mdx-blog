import React, { FC, Fragment } from "react"
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiBarChartHorizontalFill,
  RiCloudLine,
  RiQuestionnaireLine,
  RiBallPenLine,
  RiRotateLockLine,
  RiShoppingCartLine,
  RiGroupLine,
  RiTeamLine,
  RiUserAddLine,
  RiLoginCircleLine,
  RiMoneyEuroBoxLine,
  RiCommunityLine,
  RiLineChartLine,
  RiMailLine,
  RiBriefcaseLine,
  RiLoginBoxLine,
  RiQuestionLine,
  RiPriceTag3Line,
} from "react-icons/ri"

import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi"

export const mainNavigation = [
  {
    id: 1,
    name: "shop",
    icon: <RiShoppingCartLine />,
    link: "/shop",
  },
  {
    id: 2,
    name: "blog",
    icon: <RiBallPenLine />,
    link: "/blog",
  },
  {
    id: 3,
    name: "about",
    icon: <RiCommunityLine />,
    link: "/about",
  },
  {
    id: 4,
    name: "contact",
    icon: <AiOutlineMail />,
    link: "/contact",
  },
  {
    id: 5,
    name: "register",
    icon: <HiOutlineUserAdd />,
    link: "/register",
  },
  {
    id: 6,
    name: "signin",
    icon: <RiLoginBoxLine />,
    link: "/signin",
  },
  {
    id: 8,
    name: "faq",
    icon: <RiQuestionLine />,
    link: "/faq",
  },
  {
    id: 9,
    name: "pricing",
    icon: <RiPriceTag3Line />,
    link: "/pricing",
  },
  {
    id: 10,
    name: "services",
    icon: <RiCloudLine />,
    link: "/services",
  },
  {
    id: 12,
    name: "careers",
    icon: <RiBriefcaseLine />,
    link: "/careers",
  },
  {
    id: 13,
    name: "investors",
    icon: <RiLineChartLine />,
    link: "/investors",
  },
  {
    id: 14,
    name: "team",
    icon: <HiOutlineUserGroup />,
    link: "/team",
  },
]
