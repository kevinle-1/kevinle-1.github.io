import Link from "next/link";
import styles from "../../styles/k/Header.module.scss";

interface HeaderValues {
  title: string;
}

const Header = (props: HeaderValues) => {
  return (
    <div className={styles.header}>
      <div id="name">
        <Link href="/">Kevin Le</Link>
      </div>
      <div id="title">{props.title}</div>
    </div>
  );
};

export default Header;
