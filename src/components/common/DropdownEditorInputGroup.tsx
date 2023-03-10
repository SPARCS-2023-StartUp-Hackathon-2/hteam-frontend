import { Checkbox, Flex, Text, UnstyledButton } from "@mantine/core";
import DropdownEditorInput from "components/common/DropdownEditorInput";
import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { formSectionListState, selectedFormSectionState } from "recoil/formEditor";
import { AddibleInputData } from "types/form";

function DropdownEditorInputGroup() {
  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const selectedFormSection = useRecoilValue(selectedFormSectionState);

  const handleAddButtonClick = useCallback(() => {
    const newData: AddibleInputData = { id: Date.now(), data: "" };
    const newInputData = [...selectedFormSection!.content, newData];
    setFormSectionList((list) => {
      const newSectionInfo = { ...selectedFormSection! };
      newSectionInfo.content = [...newInputData];
      const point = list.findIndex((item) => item.id === newSectionInfo.id);
      return [...list.slice(0, point), newSectionInfo, ...list.slice(point + 1, list.length)];
    });
  }, [selectedFormSection, setFormSectionList]);

  const handleDeleteButtonClick = useCallback(
    (dataId: number) => {
      setFormSectionList((list) => {
        const newSectionInfo = { ...selectedFormSection! };
        const newContent = selectedFormSection!.content.filter(
          (item: AddibleInputData) => item.id !== dataId
        );
        newSectionInfo.content = newContent;
        const point = list.findIndex((item) => item.id === newSectionInfo.id);
        return [...list.slice(0, point), newSectionInfo, ...list.slice(point + 1, list.length)];
      });
    },
    [selectedFormSection, setFormSectionList]
  );

  if (!selectedFormSection) return null;

  return (
    <Flex gap={20} direction="column">
      {selectedFormSection.content.map((data: AddibleInputData, idx: number) => (
        <DropdownEditorInput
          key={data.id}
          dataId={data.id}
          order={idx + 1}
          onClickDeleteButton={handleDeleteButtonClick}
          showDeleteButton={selectedFormSection.content.length !== 1}
          value={data.data}
          onChange={(e) =>
            setFormSectionList((list) => {
              const newSectionInfo = { ...selectedFormSection };
              const content = [...newSectionInfo.content] as AddibleInputData[];
              const contentPoint = content.findIndex((item) => item.id === data.id);
              const newContent = [
                ...content.slice(0, contentPoint),
                { id: data.id, data: e.target.value },
                ...content.slice(contentPoint + 1, content.length),
              ];
              newSectionInfo.content = newContent;
              const point = list.findIndex((item) => item.id === newSectionInfo.id);
              return [
                ...list.slice(0, point),
                newSectionInfo,
                ...list.slice(point + 1, list.length),
              ];
            })
          }
        />
      ))}
      <UnstyledButton onClick={handleAddButtonClick}>
        <Flex gap={20} align="center">
          <Text>{selectedFormSection.content.length + 1}</Text>
          <Text color="gray.3" sx={{ fontSize: 15 }}>
            ?????? ??????
          </Text>
        </Flex>
      </UnstyledButton>
    </Flex>
  );
}

export default DropdownEditorInputGroup;
