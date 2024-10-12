import Head from "next/head";

interface HeadAttributes {
  pageName?: string; // Name of page (To appear in tab title also)
  description: string;
  appendName: boolean;
  og?: string; // Path or text to generate OpenGraph image
}

const PageHead = (props: HeadAttributes) => {
  const pageName =
    props.pageName != null
      ? props.pageName + (props.appendName ? " - Kevin Le" : "") // Don't append
      : "Kevin Le";

  const ogImage =
    props.og != null
      ? `https://og.kevle.xyz/${props.og}.png?theme=dark` // Generate OG
      : "/og.jpg";

  return (
    <Head>
      <title>{pageName}</title>
      <meta name="theme-color" content="#000000" />
      {props.appendName ? null : (
        <meta property="og:site_name" content="Kevin Le" />
      )}
      <meta property="og:title" content={pageName} key="title" />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default PageHead;
