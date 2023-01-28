import { Flex, Text, UnstyledButton } from "@mantine/core";
import { useSetRecoilState } from "recoil";
import { selectedFormSectionIdState } from "recoil/formEditor";
import { FormSectionType } from "types/form";

interface Props {
  dataId: number;
  order: number;
  type: FormSectionType;
  question: string;
  selected?: boolean;
}

function typeToString(type: FormSectionType) {
  switch (type) {
    case "shortText":
      return "단답형";
    case "longText":
      return "장문형";
    case "radio":
      return "객관식";
    case "checkbox":
      return "체크박스";
    case "dropdown":
      return "드롭다운";
  }
}

function FormSectionBlock({ dataId, order, type, question, selected = false }: Props) {
  const setSelectedFormSectionId = useSetRecoilState(selectedFormSectionIdState);

  return (
    <UnstyledButton onClick={() => setSelectedFormSectionId(dataId)}>
      <Flex
        sx={(theme) => ({
          padding: "8px 13px",
          border: "1px solid",
          borderRadius: theme.radius.sm,
          borderColor: theme.colors.gray[1],
          width: "100%",
          backgroundColor: selected ? theme.colors.gray[0] : theme.colors.white,
        })}
        align="center"
        gap={15}
      >
        <Text fw="bold" size="md" color={selected ? "primary.3" : "gray.5"}>
          {order}
        </Text>
        <Flex direction="column" gap={9}>
          <Text sx={{ fontSize: 13, lineHeight: "16px" }} color="gray.5">
            {typeToString(type)}
          </Text>
          <Text sx={{ fontSize: 15, lineHeight: "18px" }} color="gray.5">
            {question}
          </Text>
        </Flex>
      </Flex>
    </UnstyledButton>
  );
}

export default FormSectionBlock;
