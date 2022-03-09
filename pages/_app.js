import Link from "next/link";

const  MyApp=({ Component, pageProps })=> {

   
    return (
        <>
          <Link href="/"><a>Home</a></Link>{" "}
          <Link href="/about"><a>about</a></Link>
          <Component {...pageProps} />
          <h3>this is Footer</h3>
        </>
    )
  }

export default MyApp;