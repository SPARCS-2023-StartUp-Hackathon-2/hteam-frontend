import { Button, Flex, Text } from "@mantine/core";
import ProcessGraph from "components/common/ProcessGraph";

interface Props {
  title: string;
  startAt: string;
  endAt: string;
  state: string;
}

function RecruitmentBox({ title, startAt, endAt, state }: Props) {
  return (
    <Flex
      sx={(theme) => ({
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        borderRadius: theme.radius.sm,
        width: "100%",
        padding: "36px 42px",
      })}
    >
      <Flex direction="column">
        <Flex direction="column" gap={20} sx={{ marginBottom: 27 }}>
          <Text fw={600} sx={{ fontSize: 24 }}>
            {title}
          </Text>
          <Text color="gray.8" sx={{ fontSize: 15 }}>
            {startAt} ~ {endAt}
          </Text>
        </Flex>
        <Button
          variant="outline"
          color="gray.1"
          sx={(theme) => ({ color: theme.colors.gray[9], width: "fit-content" })}
        >
          바로가기
        </Button>
      </Flex>

      <ProcessGraph currentState={state} />
    </Flex>
  );
}

export default RecruitmentBox;
