import Logo from "@/components/ui/logo/logo";
import Link from "next/link";
import styles from "./navBottom.module.scss";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiMenu,
  HiSearch,
} from "react-icons/hi";
import { useState } from "react";
import UserMenu from "@/components/ui/menus/userMenu";
import Badge from "@/components/ui/badge/badge";

const NavBottom = () => {
  const [logedin, setLogedin] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className={styles.navBottom}>
      <div className={styles.navBottom__container}>
        <HiMenu className={styles.navBottom__menuBtn} />
        <Logo href="/" className={styles.navBottom__logo} />
        <div className={styles.navBottom__right}>
          <HiSearch onClick={() => setShowSearchBar(!showSearchBar)} />

          <Link href="/profile/wish-list">
            <HiOutlineHeart />
          </Link>

          <Badge count={5}>
            <Link href="/profile/shopping-cart">
              <HiOutlineShoppingCart />
            </Link>
          </Badge>

          {logedin ? (
            <div className={styles.navBottom__auth}>
              <Link href="/login">Log in</Link>
              <Link href="/signup">Sign up</Link>
            </div>
          ) : (
            <UserMenu />
          )}
        </div>

        {showSearchBar && <div className={styles.navBottom__searchBar}></div>}
      </div>
    </div>
  );
};

export default NavBottom;
