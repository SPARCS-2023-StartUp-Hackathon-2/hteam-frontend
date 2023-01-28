import { Box, Breadcrumbs } from "@mantine/core";
import BreadcrumbBar from "components/common/BreadcrumbBar";
import Navbar from "components/common/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  useBreadcrumb?: boolean;
  children: ReactNode;
}

function PageLayout({ useBreadcrumb = false, children }: Props) {
  return (
    <>
      <Navbar />
      {/* TODO: 시간 나면 구현 */}
      {/* <BreadcrumbBar /> */}
      <Box component="main" sx={{ minHeight: "100vh", paddingTop: 80 }}>
        {children}
      </Box>
    </>
  );
}

export default PageLayout;
