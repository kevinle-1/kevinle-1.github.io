import type { NextPage } from "next";

import Image from "next/image";

import Start from "../../assets/img/95/start.gif";
import Cat from "../../assets/img/95/cat.gif";
import Email from "../../assets/img/95/email.gif";
import Globe from "../../assets/img/95/globe.gif";
import Hamster from "../../assets/img/95/hamster.gif";
import Netscape from "../../assets/img/95/netscape.gif";
import Share from "../../assets/img/95/share.png";
import Welcome from "../../assets/img/95/welcome.gif";
import Www from "../../assets/img/95/www.png";

import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

import styles from "./95.module.scss";

// React95 doesn't have type declarations :( - https://github.com/arturbien/React95/issues/205
// @ts-ignore
import {
  AppBar,
  TextField,
  Button,
  Window,
  WindowContent,
  WindowHeader,
  Panel,
  Progress,
} from "react95";
// @ts-ignore
import original from "react95/dist/themes/original";

import Head from "next/head";
import Link from "next/link";

const W95: NextPage = () => {
  const [starting, setStarting] = useState(true);

  useEffect(() => {
    Sleep(2000).then((_) => setStarting(false));
  });

  return (
    <div className={styles.win}>
      <Head>
        <title>Kev 95</title>
        <link rel="icon" href="/assets/icons/95.ico"></link>
        <meta name="theme-color" content="#008080" />
        <meta property="og:title" content="Kev 95" key="title" />
        <meta property="og:image" content="/og95.jpg" />
      </Head>
      {starting ? <Starting /> : <Desktop />}
    </div>
  );
};

interface Frame {
  url: string;
}

const Desktop = () => {
  const [percent, setPercent] = useState(0);
  const [showFrame, setShowFrame] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  const [url, setUrl] = useState("www.google.com");
  const [submittedUrl, setSubmittedUrl] = useState("www.google.com");

  function handleClick() {
    setPercent(50);
    setSubmittedUrl(url);
    setShowFrame(true);
    setPercent(100);
  }

  const handleUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  useEffect(() => {
    Sleep(1000).then((_) => setShowWindow(true));
  });

  return (
    <div id="desktop">
      <audio autoPlay src="/assets/audio/start.mp3" />
      <ThemeProvider theme={original}>
        {showWindow ? (
          <Window className="window">
            <WindowHeader className="window-header">
              <span id="title">HamsterScape Navigator</span>
              <Link href="/" passHref={true}>
                <Button className="close-icon">
                  <span>×</span>
                </Button>
              </Link>
            </WindowHeader>
            <WindowContent id="react_content">
              <div id="content">
                <div style={{ display: "flex" }}>
                  <TextField
                    placeholder="Enter a URL"
                    onChange={handleUrlChange}
                    fullWidth
                  />
                  <Button style={{ marginLeft: 4 }} onClick={handleClick}>
                    Go!
                  </Button>
                </div>
                <div id="page">
                  {!showFrame ? <RetroPage /> : <Frame url={submittedUrl} />}
                </div>
                <Panel
                  variant="well"
                  style={{
                    marginTop: "0.3em",
                    padding: "0.1rem 0.25rem",
                    width: "100%",
                  }}
                >
                  Powered by the Wayback Machine
                  <Progress
                    id="progress"
                    variant="tile"
                    style={{
                      height: "1.3em",
                      width: "8em",
                      right: "0",
                      position: "absolute",
                    }}
                    value={percent}
                  />
                </Panel>
              </div>
            </WindowContent>
          </Window>
        ) : null}

        <AppBar id="taskbar">
          <div id="container">
            <Button id="start">
              <Image
                id="icon"
                height={16}
                width={16}
                src="data:image/png;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAA/wAA/wAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREAEAAEABAQEQARAEQAEAAAABEARAAAIiIAAQBAACAgIgAAAAAAIAAAACAAAwAAAAAAIgAzAAAAAAAiADMAAAAAAAIAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAwf4AAFB4AAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAA/gEAAP+HAAD//wAA"
                alt="data:image/png;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAA/wAA/wAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREAEAAEABAQEQARAEQAEAAAABEARAAAIiIAAQBAACAgIgAAAAAAIAAAACAAAwAAAAAAIgAzAAAAAAAiADMAAAAAAAIAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAwf4AAFB4AAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAA/gEAAP+HAAD//wAA"
              />
              Start
            </Button>

            <div id="time">{formatAMPM()}</div>
          </div>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

const RetroPage = () => {
  return (
    <div id="retro">
      <h1>Kevin&apos;s Amazing Website</h1>

      <a href="https://www.youtube.com/watch?v=p3G5IXn0K7A">
        <div id="hamsters">
          {[...Array(8)].map((idx) => (
            <Image alt="Hamster" key={idx} src={Hamster} />
          ))}
        </div>
      </a>

      <h2>hello everybody!!!</h2>
      <h2>welcome to my internet home</h2>

      <div id="email">
        <a href="mailto:95@kevle.xyz">
          <Image alt="Email Icon" src={Email} />
        </a>
      </div>
      <br />

      <div id="globe">
        <Image alt="Globe" src={Globe} />
      </div>

      <div id="footer">
        <Image alt="Cat" src={Cat} />
        <Image alt="Share Button" src={Share} />
        <Image alt="Www Button" src={Www} />
        <Image alt="Netscape Button" src={Netscape} />
        <Image alt="Welcome sign" src={Welcome} />
      </div>
    </div>
  );
};

const Starting = () => {
  return (
    <div id="startup">
      <Image alt="Startup screen" src={Start} />
    </div>
  );
};

function Frame(props: Frame) {
  var waybackUrl = "https://web.archive.org/web/1998/" + props.url;

  return (
    <div>
      <iframe id="frame" src={waybackUrl} />
    </div>
  );
}

function Sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatAMPM(): string {
  var date = new Date();
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export default W95;
