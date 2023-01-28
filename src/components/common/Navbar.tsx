import { Box, Container, Flex, Text, UnstyledButton } from "@mantine/core";
import useMe from "hooks/useMe";
import Image from "next/image";
import Link from "next/link";
import logoImage from "public/logo.svg";

function Navbar() {
  const { data, loggedIn, logout } = useMe();

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        position: "fixed",
        zIndex: 10,
        width: "100%",
        height: 80,
        backgroundColor: theme.colors.gray[8],
      })}
    >
      <Container size="lg" sx={{ height: "100%" }}>
        <Flex justify="space-between" align="center" sx={{ height: "100%" }}>
          <Flex gap={36}>
            <Link href="/">
              <Image src={logoImage} alt="logo" />
            </Link>

            <Flex gap={40} sx={{ marginRight: 70 }}>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                개인
              </Text>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                기업
              </Text>
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                고객센터
              </Text>
            </Flex>
          </Flex>
          {loggedIn && data ? (
            <Flex gap={50}>
              <Link href="/mypage">
                <Text fw={600} sx={{ fontSize: 13 }} color="white">
                  {data.groupName}
                </Text>
              </Link>
              <UnstyledButton onClick={logout}>
                <Text fw={600} sx={{ fontSize: 13 }} color="white">
                  로그아웃
                </Text>
              </UnstyledButton>
            </Flex>
          ) : (
            <Link href="/login">
              <Text fw={600} sx={{ fontSize: 13 }} color="white">
                로그인
              </Text>
            </Link>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
