import styles from "./navTop.module.scss";
import { HiOutlineHeart } from "react-icons/hi";
import { BiShieldQuarter } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const NavTop = () => {
  return (
    <div className={styles.navTop}>
      <div className={styles.navTop__container}>
        <ul className={styles.navTop__list}>
          <li>
            <Image src="/flag.png" width={20} height={20} />
            <span>Brazil / usd</span>
          </li>
          <li>
            <Link href="/buyer-Protection">
              <BiShieldQuarter />
              <span>Customer Protection</span>
            </Link>
          </li>
          <li>
            <Link href="/customer-service">Customer Service</Link>
          </li>
          <li>
            <Link href="/help-center">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
