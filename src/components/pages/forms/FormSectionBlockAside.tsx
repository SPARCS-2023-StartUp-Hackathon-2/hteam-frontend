import { ActionIcon, Box, Flex, Text, useMantineTheme } from "@mantine/core";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import { IconPlus } from "@tabler/icons-react";

function FormSectionBlockAside() {
  const theme = useMantineTheme();

  return (
    <Box
      component="aside"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        maxHeight: "100vh",
        height: "100%",
        maxWidth: "304px",
        width: "100%",
        overflow: "hidden",
      })}
    >
      <Flex
        sx={(theme) => ({
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[1],
          padding: 25,
        })}
        justify="space-between"
        align="center"
      >
        <Text fw="bold" size="md">
          설문 순서
        </Text>
        <ActionIcon
          variant="transparent"
          sx={(theme) => ({
            border: "1px solid",
            borderRadius: 5,
            borderColor: theme.colors.gray[1],
            backgroundColor: theme.colors.gray[0],
          })}
          size={20}
        >
          <IconPlus size={16} color={theme.colors.gray[5]} />
        </ActionIcon>
      </Flex>

      <Flex
        sx={(theme) => ({
          padding: 16,
          height: "100%",
          overflowY: "scroll",
        })}
        direction="column"
        gap={12}
      >
        <FormSectionBlock order={1} type="shortText" question="질문1" selected />
        <FormSectionBlock order={1} type="longText" question="질문1" />
        <FormSectionBlock order={1} type="dropdown" question="질문1" />
        <FormSectionBlock order={1} type="checkbox" question="질문1" />
        <FormSectionBlock order={1} type="radio" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
        <FormSectionBlock order={1} type="shortText" question="질문1" />
      </Flex>
    </Box>
  );
}

export default FormSectionBlockAside;
