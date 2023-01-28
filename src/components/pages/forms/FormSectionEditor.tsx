import {
  Box,
  Flex,
  Text,
  TextInput as MantineTextInput,
  ActionIcon,
  useMantineTheme,
  Textarea,
} from "@mantine/core";
import { useRecoilState, useRecoilValue } from "recoil";
import { IconX } from "@tabler/icons-react";
import CheckboxEditorInputGroup from "components/common/CheckboxEditorInputGroup";
import DropdownEditorInputGroup from "components/common/DropdownEditorInputGroup";
import TextInput from "components/common/TextInput";
import { FormSectionType } from "types/form";
import { formSectionListState, selectedFormSectionState } from "recoil/formEditor";
import { useCallback } from "react";
import RadioEditorInputGroup from "components/common/RadioEditorInputGroup";

interface Props {
  dataId: number;
  order: number;
  type: FormSectionType;
}

function FormSectionEditor({ dataId, order, type }: Props) {
  const theme = useMantineTheme();

  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const currentFormSection = useRecoilValue(selectedFormSectionState);

  const handleClickDeleteButton = useCallback(() => {
    setFormSectionList((list) => {
      const filteredList = list.filter((item) => item.id !== dataId);
      const newList = filteredList.map((item, idx) => ({ ...item, order: idx + 1 }));
      return newList;
    });
  }, [setFormSectionList, dataId]);

  if (!currentFormSection) {
    return null;
  }

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
            value={currentFormSection.question}
            onChange={(e) =>
              setFormSectionList((list) => {
                const newSectionInfo = { ...currentFormSection };
                newSectionInfo.question = e.target.value;
                const point = list.findIndex((item) => item.id === newSectionInfo.id);
                return [
                  ...list.slice(0, point),
                  newSectionInfo,
                  ...list.slice(point + 1, list.length),
                ];
              })
            }
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
            value={currentFormSection.description}
            onChange={(e) =>
              setFormSectionList((list) => {
                const newSectionInfo = { ...currentFormSection };
                newSectionInfo.description = e.target.value;
                const point = list.findIndex((item) => item.id === newSectionInfo.id);
                return [
                  ...list.slice(0, point),
                  newSectionInfo,
                  ...list.slice(point + 1, list.length),
                ];
              })
            }
          />
          {type === "shortText" && (
            <TextInput
              value={currentFormSection.content}
              onChange={(e) =>
                setFormSectionList((list) => {
                  const newSectionInfo = { ...currentFormSection };
                  newSectionInfo.content = e.target.value;
                  const point = list.findIndex((item) => item.id === newSectionInfo.id);
                  return [
                    ...list.slice(0, point),
                    newSectionInfo,
                    ...list.slice(point + 1, list.length),
                  ];
                })
              }
            />
          )}
          {type === "longText" && (
            <Textarea
              placeholder="입력란 예시"
              value={currentFormSection.content}
              onChange={(e) =>
                setFormSectionList((list) => {
                  const newSectionInfo = { ...currentFormSection };
                  newSectionInfo.content = e.target.value;
                  const point = list.findIndex((item) => item.id === newSectionInfo.id);
                  return [
                    ...list.slice(0, point),
                    newSectionInfo,
                    ...list.slice(point + 1, list.length),
                  ];
                })
              }
            />
          )}
          {type === "radio" && <RadioEditorInputGroup />}
          {type === "checkbox" && <CheckboxEditorInputGroup />}
          {type === "dropdown" && <DropdownEditorInputGroup />}
        </Flex>

        <ActionIcon
          variant="transparent"
          sx={{ position: "absolute", top: 4, right: 0 }}
          onClick={handleClickDeleteButton}
        >
          <IconX size={24} color={theme.colors.gray[8]} />
        </ActionIcon>
      </Flex>
    </Box>
  );
}

export default FormSectionEditor;
