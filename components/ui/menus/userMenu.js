import Link from "next/link";
import React from "react";
import Avatar from "../avatar/avatar";
import DropDown from "../dropDown/dropDown";
import styles from "./menus.module.scss";
import {HiOutlineUserCircle, HiOutlineHeart} from "react-icons/hi";
import {AiOutlineShop} from "react-icons/ai";
import {BiMessage} from "react-icons/bi";

const UserMenu = () => {
  return (
    <DropDown icon={<Avatar imgUrl="/face.jpg" />}>
      <div className={styles.userMenu}>
        <h6>Welcome to Blue Flame</h6>
        <ul>
          <li>
            <Link href="/account">
                <HiOutlineUserCircle/>
                <span>Account</span>
            </Link>
          </li>

          <li>
            <Link href="/account/orders">
                <AiOutlineShop/>
                <span>My Orders</span>
            </Link>
          </li>

          <li>
            <Link href="/account/messages">
                <BiMessage/>
                <span>Messages</span>
            </Link>
          </li>

          <li>
            <Link href="/account/wish-list">
                <HiOutlineHeart/>
                <span>Wish List</span>
            </Link>
          </li>
        </ul>

        <button>Log out</button>
      </div>

    </DropDown>
  );
};

export default UserMenu;
