import { Container, Flex } from "@mantine/core";
import RecruitmentBox from "components/common/RecruitmentBox";
import useRecruitments from "hooks/useRecruitments";
import { dateObjectToDateString } from "utils/date";

function RecruitmentsSection() {
  const { data: recruitments, isLoading: isRecruitmentsLoading } = useRecruitments();

  if (isRecruitmentsLoading) return null;
  if (!recruitments) return null;
  return (
    <Container size="lg" sx={{ paddingTop: 12 }}>
      <Flex direction="column" gap={24} sx={{ width: "100%" }}>
        {recruitments.map((recruitment) => (
          <RecruitmentBox
            key={recruitment.id}
            id={recruitment.id}
            title={recruitment.name}
            startAt={dateObjectToDateString(new Date(recruitment.startAt))}
            endAt={dateObjectToDateString(new Date(recruitment.endAt))}
            state={recruitment.state}
          />
        ))}
      </Flex>
    </Container>
  );
}

export default RecruitmentsSection;
