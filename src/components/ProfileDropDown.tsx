"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

const ProfileDropDown = () => {
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <div className="flex items-center cursor-pointer">
            <Avatar src="https://cdn.vietnambiz.vn/171464876016439296/2021/8/6/231224306101606836684693053275864510406753212n-16282082449632014653004.jpg" />
            <div className="mx-4">Tran Kim Hoang</div>
            <div>
              <img src="/header/down.png" />
            </div>
          </div>
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions">
          <DropdownItem key="profile">
            <div className="flex items-center">
              <img className="mr-4" src="/header/profile.png" />
              My Profile
            </div>
          </DropdownItem>
          <DropdownItem key="cart">
            <div className="flex items-center">
              <img className="mr-4" src="/header/cart.png" />
              My trip cart
            </div>
          </DropdownItem>
          <DropdownItem key="settings">
            <div className="flex items-center">
              <img className="mr-4" src="/header/favorite.png" />
              My favorite
            </div>
          </DropdownItem>
          <DropdownItem key="favorite">
            <div className="flex items-center">
              <img className="mr-4" src="/header/history.png" />
              My history
            </div>
          </DropdownItem>
          <DropdownItem key="logout">
            <div className="flex items-center">
              <img className="mr-4" src="/header/logout.png" />
              Log out
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
