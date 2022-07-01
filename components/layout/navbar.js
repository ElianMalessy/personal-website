import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../themeToggleButton";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoNewspaperOutline,
  IoBulbOutline,
} from "react-icons/io5";
import styles from "../../styles/Home.module.css";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const buttonColor = useColorModeValue("purple.500", "orange.200");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? buttonColor : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = ({ path }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("#f0e7db", "#202023");
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      p="1rem 1rem 1rem 1rem"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      paddingRight="1.5rem"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            fontSize={22}
            left="0"
            top="0"
            height="100%"
            width="100%"
            position={"relative"}
            onClick={() => router.push("/")}
            cursor={"pointer"}
          >
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="217"
              height="34.5"
              fill="none"
              viewBox="0 0 434 69"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="3"
                d="M31.438 2.85C19.456.512 10.712 2.481 8.383 15.295c-1.007 5.533-1.146 8.713 5.277 10.777 2.342.753 4.665 1.21 7.02 1.473m0 0c2.015.224 4.054.305 6.147.305 2.512 0-1.973-.35-6.148-.305Zm0 0c-1.857.02-3.651.118-4.742.36-3.544.788-7.56 6.813-9.45 9.648l-.05.075C3.394 42.194-.073 51.62 3.55 56.795c4.428 6.325 15.829 3.88 22.111 2.833 5.68-.947 10.984-5.451 15.279-10.147m0 0c1.757-1.922 3.346-3.876 4.721-5.63 5.544-7.074 10-14.713 13.223-23 1.216-3.13 2.23-13.833-1.445-15.779C48.364.27 39.845 24.221 39.494 29.85c-.314 5.024-1.043 14.288 1.445 19.63Zm0 0c.302.648.651 1.24 1.055 1.758 3.191 4.104 10.449.124 13.444-2.167a157.713 157.713 0 0 0 11.416-9.64m0 0c.465-.433.923-.866 1.373-1.297m-1.373 1.297c.193-.202.388-.397.584-.582.278-.262.539-.5.789-.715m-1.373 1.297c-5.26 5.516-9.156 17.082 3.084 14.363 5.456-1.213 8.976-8.12 12.722-11.723 1.815-1.745 4.15-4.54 6.34-5.666.23-.118 5-2.406 5-2.406m-25.773 4.135c.604-.58 1.194-1.157 1.767-1.73.313-.313 3.894-1.43 2.888-1-2.023.868-3.136 1.416-4.655 2.73ZM94 34c2.691-.821 7.088-1 5-1-2.615 0-3.39.263-5 1Zm0 0c-2.02.926-3.426.999-6 3.02-1.381 1.086-9.12 15.633-5.562 15.83C87.333 53.122 95 50 98 45c0 0 2.521-7.98 3-7.5 2.494 2.493.253 7.203.438 10.35.168 2.856 9.165-8.123 9.945-9 1.29-1.451 8.128-10.108 10.833-5 1.513 2.858-.601 7.368.278 10.445.061.215 6.526-11.592 8.444-12.445 4.692-2.085 4.96-4.82 8.722-.222 2.763 3.376-.104 10.504.834 14.722.818 3.681 4.926 3.5 7.944 3.5M81.5 21c3.971-3.103 1.16-3-1-1.5M172 18c7.79-3.04 13.382-3.167 17.5 4.611 1.217 2.3 1.937 4.85 2.346 7.526m0 0C192.841 36.64 192 43.873 192 50v-7.444c0-3.82-.388-8.234-.154-12.419Zm0 0c.36-6.434 2.189-12.327 9.154-14.693C222.442 8.162 216 39.012 216 51v.222c0-4.522 1.69-8.216 1.944-12.666.61-10.66 1.706-24.556 15.834-24.556 18.569 0 4.801 24.23 9.444 33 4.839 9.14 11.666-4.151 16.981-11.08m0 0c.728-.95 1.429-1.78 2.092-2.418m-2.092 2.418a17.05 17.05 0 0 1 2.092-2.418m-2.092 2.418c-1.772 2.468-2.875 5.287-3.203 7.58-.682 4.772 6.978 6.99 10.556 4.389C270.535 45.722 273 40.5 274 38c.861-2.151 1.316-6 2.778-1.778 1.261 3.645 2.213 9.299 4.444 12.334 3.973 5.402 13.666-1.771 16.556-4.5.279-.264.556-.536.828-.815m-36.311-9.739c.069-.066.137-.13.205-.191m-.205.191.205-.191m0 0c.962-.811 3.767-1.96 5.056-2.311 2.312-.63 2.535-1 4.944-1 7.01 0 1.171-.175-2.5 0-2.95.14-5.476 1.453-7.5 3.31Zm36.106 9.93c6.963-7.116 11.624-18.852 12.283-28.574.189-2.788.457-12.491-5.667-8-6.092 4.468-12.239 27.434-6.616 36.574Zm0 0c1.432 2.328 3.628 3.759 6.783 3.759 1.703 0 3.186-.291 4.484-.825m0 0c3.512-1.443 5.667-4.66 7.127-8.675.856-2.353 3.34-10.9-3-7.278-3.486 1.992-5.407 11.026-4.944 14.722.062.502.362.9.817 1.231Zm0 0c1.162.843 3.331 1.235 5.127 1.714 2.5.666 7.049.666 9 .666 6-3.055 4.692-2.819 9.333-8.388 3.391-4.069 5.61-9.74 6.556-14.945.755-4.155 3.211-1.034 4.111 1.667 3.4 10.2-2.673 11.973-9.889 16.611-4.163 2.676 6.307 2.5 6.889 2.5 6.207 0 10.284-5.171 14.444-9.444C356.654 35.313 360.206 29 362 29c2.475 0 .492 7.886-.056 8.889-3.02 5.537-17.551 8.804-1.388 8.111 5.637-.242 10.108-5.325 14-9 1.389-1.312-2.291 5.555-2.5 6.5-.856 3.852 12.535-4.24 13.5-4.722 2.408-1.205 2.525.56 1.685 3.32m0 0c-1.446 4.755-5.732 12.462-6.019 13.013-1.813 3.48-3.851 7.924-7.222 10.222-4.637 3.162-6.646-.453-4.944-5.5 2.904-8.616 10.136-13.938 18.185-17.735Zm0 0c4.919-2.32 10.142-4.07 14.87-5.654 15.801-5.292 13.77-5.35 29.889-9.555"
              />
            </svg>
            <Box className={styles.overlay} bg={bgColor} />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/projects"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            path={path}
          >
            <IoBulbOutline />
            Projects
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/elian-malessy-2720211ba/"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            path={path}
          >
            <IoLogoLinkedin />
            LinkedIn
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/ElianMalessy"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            path={path}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/elian-malessy-2720211ba/"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            path={path}
          >
            <IoLogoLinkedin />
            LinkedIn
          </LinkItem>
          <LinkItem
            href="/resume"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, marginRight: "1rem" }}
            path={path}
          >
            <IoNewspaperOutline />
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink
                  href="https://www.linkedin.com/in/elian-malessy-2720211ba/"
                  passHref
                >
                  <MenuItem as={Link}>Linkedin</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/ElianMalessy" passHref>
                  <MenuItem as={Link}>Github</MenuItem>
                </NextLink>
                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
