import { Flex, Text, UnstyledButton } from "@mantine/core";
import TriangleArrowDownIcon from "components/common/icons/TriangleArrowDownIcon";
import TriangleArrowUpIcon from "components/common/icons/TriangleArrowUpIcon";
import { useCallback } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { formSectionListState, selectedFormSectionIdState } from "recoil/formEditor";
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
    default:
      return "기본 질문";
  }
}

function FormSectionBlock({ dataId, order, type, question, selected = false }: Props) {
  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const setSelectedFormSectionId = useSetRecoilState(selectedFormSectionIdState);

  const handleClickOrderUpButton = useCallback(() => {
    setFormSectionList((list) => {
      const point = list.findIndex((item) => item.id === dataId);
      const swappedSection = { ...list[point - 1] };
      swappedSection.order += 1;
      const swappingSection = { ...list[point] };
      swappingSection.order -= 1;
      return [
        ...list.slice(0, point - 1),
        swappingSection,
        swappedSection,
        ...list.slice(point + 1, list.length),
      ];
    });
  }, [setFormSectionList, dataId]);

  const handleClickOrderDownButton = useCallback(() => {
    setFormSectionList((list) => {
      const point = list.findIndex((item) => item.id === dataId);
      const swappedSection = { ...list[point + 1] };
      swappedSection.order -= 1;
      const swappingSection = { ...list[point] };
      swappingSection.order += 1;
      return [
        ...list.slice(0, point),
        swappedSection,
        swappingSection,
        ...list.slice(point + 2, list.length),
      ];
    });
  }, [setFormSectionList, dataId]);

  return (
    <UnstyledButton sx={{ position: "relative" }} onClick={() => setSelectedFormSectionId(dataId)}>
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
        <Flex direction="column" gap={9} sx={{ overflowX: "hidden" }}>
          <Text sx={{ fontSize: 13, lineHeight: "16px" }} color="gray.5">
            {typeToString(type)}
          </Text>
          <Text sx={{ fontSize: 15, lineHeight: "18px" }} color="gray.5">
            {question || "제목 없음"}
          </Text>
        </Flex>
      </Flex>

      {selected && type !== "basic" && (
        <Flex
          direction="column"
          sx={{ position: "absolute", top: "50%", right: 24, transform: "translateY(-50%)" }}
        >
          <TriangleArrowUpIcon
            style={{ marginBottom: "12px", visibility: order !== 2 ? "initial" : "hidden" }}
            onClick={handleClickOrderUpButton}
          />
          <TriangleArrowDownIcon
            style={{ visibility: order !== formSectionList.length + 1 ? "initial" : "hidden" }}
            onClick={handleClickOrderDownButton}
          />
        </Flex>
      )}
    </UnstyledButton>
  );
}

export default FormSectionBlock;
