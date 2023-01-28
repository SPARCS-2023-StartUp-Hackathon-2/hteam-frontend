import { Button, Container, Divider, Text } from "@mantine/core";
import RecruitmentBox from "components/common/RecruitmentBox";
import useMe from "hooks/useMe";

function MyPage() {
  // const { data, isLoading } = useMe();

  // if (isLoading) return null;
  // if (!data) throw new Error("정보를 받아올 수 없습니다.");
  return (
    <>
      <Container size="lg" sx={{ paddingTop: 97, paddingBottom: 38 }}>
        <Text color="gray.9" fw={600} sx={{ fontSize: 24, marginBottom: 31 }}>
          반갑습니다,
          <br />
          여기에 데이터 입력 님!
        </Text>
        <Button color="primary.2" sx={{ borderRadius: 999 }}>
          모집 추가하기
        </Button>
      </Container>
      <Divider my="sm" color="gray.1" />
      <Container size="lg" sx={{ paddingTop: 12 }}>
        {[{ title: "test", startAt: "2022.12.02", endAt: "2022.12.17", state: "PREPARING" }].map(
          (item) => (
            <RecruitmentBox
              key={item.title}
              title={item.title}
              startAt={item.startAt}
              endAt={item.endAt}
              state={item.state}
            />
          )
        )}
      </Container>
    </>
  );
}

export default MyPage;
