import { Button, Container, Text } from "@mantine/core";
import AddRecruitmentModal from "components/pages/mypage/AddRecruitmentModal";
import useMe from "hooks/useMe";
import useRecruitments from "hooks/useRecruitments";
import { useState } from "react";

function UserSection() {
  const { data: user, isLoading: isUserLoading } = useMe();
  const { mutate } = useRecruitments();

  const [showModal, setShowModal] = useState(false);

  if (isUserLoading) return null;
  if (!user) return null;
  return (
    <Container size="lg" sx={{ paddingTop: 97, paddingBottom: 38 }}>
      <Text color="gray.9" fw={600} sx={{ fontSize: 24, marginBottom: 31 }}>
        반갑습니다,
        <br />
        {user.groupName} 님!
      </Text>
      <Button color="primary.2" sx={{ borderRadius: 999 }} onClick={() => setShowModal(true)}>
        모집 추가하기
      </Button>
      <AddRecruitmentModal
        opened={showModal}
        onClose={() => {
          setShowModal(false);
          mutate();
        }}
      />
    </Container>
  );
}

export default UserSection;
