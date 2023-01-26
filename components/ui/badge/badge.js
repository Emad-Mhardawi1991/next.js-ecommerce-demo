import styles from "./badge.module.scss";

const Badge = ({ count, children }) => {
  return (
    <div className={styles.badge}>
        {count >0 && <span> {count}</span> }
      {children}
    </div>
  );
};

export default Badge;
