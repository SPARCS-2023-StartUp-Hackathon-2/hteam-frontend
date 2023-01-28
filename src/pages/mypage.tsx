import { Divider } from "@mantine/core";
import { useAuth } from "components/common/AuthProvider";
import RecruitmentsSection from "components/pages/mypage/RecruitmentsSection";
import UserSection from "components/pages/mypage/UserSection";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyPage() {
  const { loggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loggedIn) {
      router.replace("/");
    }
  }, [loggedIn, router]);

  return (
    <>
      <UserSection />
      <Divider my="sm" color="gray.1" />
      <RecruitmentsSection />
    </>
  );
}

export default MyPage;
