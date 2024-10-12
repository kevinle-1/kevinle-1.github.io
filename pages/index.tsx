import type { NextPage } from "next";
import Logo from "../public/assets/logo.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageHead from "./_head";

interface Links {
  name: string;
  url: string;
  nextLink?: boolean;
}

const Home: NextPage = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const SatelliteMap = dynamic(
    () => import("../components/Map").then((mod) => mod.default),
    { ssr: false },
  );

  const links: Links[] = [
    {
      name: "Email",
      url: "mailto:hi@kevle.xyz",
    },
    {
      name: "GitHub",
      url: "https://github.com/kevle1",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevle1/",
    },
  ];

  return (
    <div className="overflow-hidden bg-light text-dark dark:bg-dark dark:text-light">
      <PageHead description="Kevin Le" />
      <div className="flex h-screen flex-col items-center justify-center leading-tight">
        <div className="flex w-[90%] flex-col items-center md:w-[60%] min-[1300px]:w-[25%]">
          <div className="mb-2 flex w-full flex-row justify-between">
            Kevin Le
            <div className="mt-1 h-6 w-6">
              <a href="/95">
                <Logo />
              </a>
            </div>
          </div>

          <div className="line h-px w-full bg-dark dark:bg-light" />

          <div className="h-64 w-full">
            <SatelliteMap />
          </div>

          <div className="line mb-4 h-px w-full bg-dark dark:bg-light" />

          <div className="flex w-full flex-row justify-between">
            <div>
              {links.map((link, index) => (
                <div key={index} className="mt-1 lg:mt-0">
                  <a
                    className="link"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-end justify-items-end gap-1 text-right xl:gap-0">
              <div className="flex justify-end">
                <div onClick={toggleTheme} className="link w-min">
                  {dark ? "OFF" : "ON"}
                </div>
              </div>
              ©{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
