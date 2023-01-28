import { Checkbox, Flex, Text, UnstyledButton } from "@mantine/core";
import DropdownEditorInput from "components/common/DropdownEditorInput";
import { useCallback, useState } from "react";

interface InputData {
  id: number;
}

function DropdownEditorInputGroup() {
  const [inputData, setInputData] = useState<InputData[]>([{ id: Date.now() }]);

  const handleAddButtonClick = useCallback(() => {
    setInputData((p) => [...p, { id: Date.now() }]);
  }, []);

  const handleDeleteButtonClick = useCallback((dataId: number) => {
    setInputData((p) => p.filter((d) => d.id !== dataId));
  }, []);

  return (
    <Flex gap={20} direction="column">
      {inputData.map((data, idx) => (
        <DropdownEditorInput
          key={data.id}
          dataId={data.id}
          order={idx + 1}
          onClickDeleteButton={handleDeleteButtonClick}
          showDeleteButton={inputData.length !== 1}
        />
      ))}
      <UnstyledButton onClick={handleAddButtonClick}>
        <Flex gap={20} align="center">
          <Text>{inputData.length + 1}</Text>
          <Text color="gray.3" sx={{ fontSize: 15 }}>
            옵션 추가
          </Text>
        </Flex>
      </UnstyledButton>
    </Flex>
  );
}

export default DropdownEditorInputGroup;
