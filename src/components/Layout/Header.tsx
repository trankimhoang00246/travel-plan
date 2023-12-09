import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import NavItems from "../NavItems";
import ProfileDropDown from "../ProfileDropDown";

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-[var(--second-color)] flex">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Link href={"#"}>
            <div className="flex items-center">
              <img className="mr-2" src="/header/logo.svg" alt="logo" />
              <span className="text-xl font-semibold text-[var(--primary-color)] mr-8">
                TravelPlan
              </span>
            </div>
          </Link>

          <NavItems />
        </div>

        <ProfileDropDown />
      </div>
    </header>
  );
};

export default Header;
