import Head from 'next/head'

interface HeadAttributes {
  pageName?: string, // Name of page (To appear in tab title also)
  description: string,
  og?: string // Path or text to generate OpenGraph image
}

const PageHead = (props: HeadAttributes) => {
  const pageName = props.pageName != null ?
    props.pageName + " - Kevin Le" :
    "Kevin Le";

  const ogImage = props.og != null ?
    `https://kevinle-og-image.vercel.app/${props.og}.png?theme=dark` : // Generate OG
    "/og.jpg";

  return (
    <Head>
      <title>{pageName}</title>
      <meta name="theme-color" content="#000000" />
      <meta property="og:title" content={pageName} key="title" />
      <meta property="og:description" content={props.description}/>
      <meta property="og:image" content={ogImage} />
    </Head>
  )
}

export default PageHead
