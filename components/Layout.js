import React from "react";
import Link from "next/link";
import MainTitle from "./MainTitle";
import { TbHomeHeart } from "react-icons/tb";

const Layout = ({ children, title }) => {
  return (
    <>
      <Link href="/">
        <TbHomeHeart className="h-10 w-10 absolute ml-20 mt-4 hover:stroke-red-800 ease-linear duration-300" />
      </Link>
      <MainTitle>{title}</MainTitle>
      <div>{children}</div>
    </>
  );
};

export default Layout;
