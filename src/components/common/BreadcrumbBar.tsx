import { Box, Breadcrumbs, Container, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadcrumbBar() {
  const router = useRouter();
  const paths = router.pathname.split("/");
  const routes = paths.slice(1, paths.length);
  const crumblist = routes.map((subpath, idx) => {
    const href = "/" + routes.slice(0, idx + 1).join("/");
    const text = subpath;
    return { href, text };
  });

  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        top: 80,
        width: "100%",
        height: 48,
        zIndex: 1000,
        backgroundColor: "white",
        borderBottom: "1px solid",
        borderColor: theme.colors.gray[1],
      })}
    >
      <Container size="lg" sx={{ height: "100%" }}>
        <Flex align="center" sx={{ height: "100%" }}>
          <Breadcrumbs>
            {crumblist.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Text color="gray.6" fw={600} sx={{ fontSize: 13 }}>
                  {item.text}
                </Text>
              </Link>
            ))}
          </Breadcrumbs>
        </Flex>
      </Container>
    </Box>
  );
}

export default BreadcrumbBar;
