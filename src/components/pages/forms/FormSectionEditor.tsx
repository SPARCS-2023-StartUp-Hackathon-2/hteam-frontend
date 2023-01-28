import {
  Box,
  Flex,
  Text,
  TextInput as MantineTextInput,
  ActionIcon,
  useMantineTheme,
  Textarea,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import CheckboxEditorInputGroup from "components/common/CheckboxEditorInputGroup";
import DropdownEditorInputGroup from "components/common/DropdownEditorInputGroup";
import TextInput from "components/common/TextInput";
import { FormSectionType } from "types/form";

interface Props {
  order: number;
  type: FormSectionType;
}

function FormSectionEditor({ order, type }: Props) {
  const theme = useMantineTheme();

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Flex align="flex-start" gap={15}>
        <Text
          sx={(theme) => ({
            fontSize: 32,
            color: theme.colors.gray[8],
            lineHeight: "38px",
          })}
          fw="bold"
        >
          {order}
        </Text>

        <Flex direction="column" sx={{ flex: 1 }}>
          <MantineTextInput
            variant="unstyled"
            placeholder="질문을 입력해주세요."
            sx={{ marginBottom: 10 }}
            styles={(theme) => ({
              input: {
                fontSize: 32,
                color: theme.colors.gray[8],
                lineHeight: "38px",
                fontWeight: "bold",
              },
            })}
          />
          <MantineTextInput
            variant="unstyled"
            placeholder="설명을 입력해주세요."
            sx={{ marginBottom: 24 }}
            styles={(theme) => ({
              input: {
                fontSize: 20,
                color: theme.colors.gray[8],
              },
            })}
          />
          {type === "shortText" && <TextInput />}
          {type === "longText" && <Textarea placeholder="입력란 예시" />}
          {type === "checkbox" && <CheckboxEditorInputGroup />}
          {type === "dropdown" && <DropdownEditorInputGroup />}
        </Flex>

        <ActionIcon variant="transparent" sx={{ position: "absolute", top: 4, right: 0 }}>
          <IconX size={24} color={theme.colors.gray[8]} />
        </ActionIcon>
      </Flex>
    </Box>
  );
}

export default FormSectionEditor;
