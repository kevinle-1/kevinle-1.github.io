import type { NextPage } from "next";
import Link from "next/link";

import styles from "../../styles/z.module.scss";

import K from "../../assets/img/k.svg";

import Mail from "../../assets/img/social/mail.svg";
import PageHead from "../_head";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Copy: NextPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div>
      <PageHead description="Card" appendName={false} />
      <div className={styles.container}>
        <div id="k">
          <K />
        </div>
        <div id="title">Kevin Le</div>
        <Link href="/">
          <img id="card" alt="card" src="/assets/img/card.png" />
        </Link>
        <div id="socials">
          <span>
            <a href="mailto:hi@kevle.xyz">
              <Mail />
            </a>
            {/* <a href="mailto:hi@kevle.xyz"><Twitter/></a>
              <a href="mailto:hi@kevle.xyz"><LinkedIn/></a>
              <a href="mailto:hi@kevle.xyz"><GitHub/></a> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Copy;
