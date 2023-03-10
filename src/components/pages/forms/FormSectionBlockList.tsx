import { ActionIcon, Box, Flex, Text, useMantineTheme } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import { formSectionListState, selectedFormSectionIdState } from "recoil/formEditor";
import { useCallback } from "react";
import { FormSectionItem } from "types/form";

function FormSectionBlockList() {
  const theme = useMantineTheme();

  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const [selectedFormSectionId, setSelectedFormSectionId] = useRecoilState(
    selectedFormSectionIdState
  );

  const handleClickAddButton = useCallback(() => {
    const id = Date.now();
    const newSection: FormSectionItem = {
      id,
      order: formSectionList.length + 2,
      type: "shortText",
      question: "",
      description: "",
      required: false,
      content: "",
    };

    setFormSectionList([...formSectionList, newSection]);
    setSelectedFormSectionId(id);
  }, [formSectionList, setFormSectionList, setSelectedFormSectionId]);

  return (
    <Box
      component="aside"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderColor: theme.colors.gray[1],
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
          onClick={handleClickAddButton}
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
        <FormSectionBlock
          dataId={0}
          order={1}
          type="basic"
          question="신상 정보 기입"
          selected={selectedFormSectionId === 0}
        />
        {formSectionList.map((formSection, idx) => (
          <FormSectionBlock
            key={formSection.id}
            dataId={formSection.id}
            order={formSection.order}
            type={formSection.type}
            question={formSection.question}
            selected={selectedFormSectionId === formSection.id}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default FormSectionBlockList;
