import { Box, Button, Flex, Text } from "@mantine/core";
import ProcessGraph from "components/common/RecruitmentProcessGraph";
import Link from "next/link";
import { RecruitmentState } from "types/api";

interface Props {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
  state: string;
}

function RecruitmentBox({ id, title, startAt, endAt, state }: Props) {
  return (
    <Flex
      sx={(theme) => ({
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        borderRadius: theme.radius.sm,
        width: "100%",
        padding: "36px 42px",
      })}
      justify="space-between"
      align="center"
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
        <Link href={`/recruitments/${id}`} passHref legacyBehavior>
          <Button
            component="a"
            variant="outline"
            color="gray.1"
            sx={(theme) => ({ color: theme.colors.gray[9], width: "fit-content" })}
          >
            바로가기
          </Button>
        </Link>
      </Flex>
      <Box
        sx={{
          marginRight: 40,
        }}
      >
        <ProcessGraph startAt={startAt} endAt={endAt} currentState={state as RecruitmentState} />
      </Box>
    </Flex>
  );
}

export default RecruitmentBox;
