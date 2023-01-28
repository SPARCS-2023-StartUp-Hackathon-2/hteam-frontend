import { Box, Container, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logoImage from "public/logo.svg";

function Navbar() {
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        position: "fixed",
        zIndex: 1000,
        width: "100%",
        height: 80,
        backgroundColor: theme.colors.gray[8],
      })}
    >
      <Container size="lg" sx={{ height: "100%" }}>
        <Flex justify="space-between" align="center" sx={{ height: "100%" }}>
          <Link href="/">
            <Image src={logoImage} alt="logo" />
          </Link>

          <Flex>
            <Flex gap={40} sx={{ marginRight: 70 }}>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                개인
              </Text>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                기업
              </Text>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                서비스 소개
              </Text>
            </Flex>
            <Link href="/login">
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                로그인
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
