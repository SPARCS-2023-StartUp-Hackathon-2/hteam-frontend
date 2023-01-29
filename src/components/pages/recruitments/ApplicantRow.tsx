import { Button, Flex, Text } from "@mantine/core";
import Badge from "components/common/Badge";
import { ReactNode } from "react";
import { Applicant } from "types/api";

interface Props {
  applicant: Applicant;
  decisionButton: ReactNode;
}

function ApplicantRow({ applicant, decisionButton }: Props) {
  return (
    <Flex
      gap={78}
      align="center"
      justify="center"
      sx={(theme) => ({
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        borderRadius: theme.radius.sm,
        padding: "20px 0",
      })}
    >
      <Badge state={applicant.formState}></Badge>
      <Text>{applicant.name}</Text>
      <Text>{applicant.phoneNumber}</Text>
      <Text>{applicant.email}</Text>
      <Text>{new Date(applicant.submittedAt).toLocaleDateString("ko-KR")}</Text>
      {decisionButton}
    </Flex>
  );
}

export default ApplicantRow;
