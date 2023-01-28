import { Container, Flex, Text } from "@mantine/core";
import NextStepDownwardIcon from "components/common/icons/NextStepDownwardIcon";
import ApplicantsSection from "components/pages/recruitments/sections/ApplicantsSection";
import BasicInfoSection from "components/pages/recruitments/sections/BasicInfoSection";
import DocumentSection from "components/pages/recruitments/sections/DocumentSection";
import InterviewSection from "components/pages/recruitments/sections/InterviewSection";
import { useRouter } from "next/router";

function RecruitmentsDetailPage() {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  if (!id) return null;
  return (
    <Container size="lg" sx={{ paddingTop: 45, paddingBottom: 45 }}>
      <BasicInfoSection rid={id} />
      <Flex justify="space-between">
        <Flex direction="column" gap="36px" align="center">
          <DocumentSection rid={id} />
          <NextStepDownwardIcon />
          <InterviewSection />
          <NextStepDownwardIcon />
          <Text
            c="gray.2"
            sx={(theme) => ({
              fontSize: "20px",
              fontWeight: 600,
            })}
          >
            모집 완료!
          </Text>
        </Flex>
        <Flex>
          <ApplicantsSection />
        </Flex>
      </Flex>
    </Container>
  );
}

export default RecruitmentsDetailPage;
