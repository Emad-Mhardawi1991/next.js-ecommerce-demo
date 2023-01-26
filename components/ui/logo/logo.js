import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = ({ href, className }) => {
  return (
    <Link href={href || ""} className={`${styles.logo} ${className}`}>
      <h2>
        Blue<span>Flame</span>
      </h2>
    </Link>
  );
};

export default Logo;
