import Document, { Head, NextScript, Main, Html } from "next/document";

export default class document extends Document {
  render() {
    return (
      <Html style={{ scrollbarWidth: "none" }}>
        <Head>
          <link rel={"icon"} href="fav.png" type="image/png" />
        </Head>

        <body style={{ background: "#1d1d1d" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
