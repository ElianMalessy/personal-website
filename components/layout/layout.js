import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative", marginTop: "8rem" }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Elian Hijmans Malessy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Elian Malessy" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
      )}
      {children}
    </>
  </motion.article>
);

export default Layout;
