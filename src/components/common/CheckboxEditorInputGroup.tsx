import { Checkbox, Flex, Text, UnstyledButton } from "@mantine/core";
import CheckboxEditorInput from "components/common/CheckboxEditorInput";
import { useCallback, useState } from "react";

interface InputData {
  id: number;
}

function CheckboxEditorInputGroup() {
  const [inputData, setInputData] = useState<InputData[]>([{ id: Date.now() }]);

  const handleAddButtonClick = useCallback(() => {
    setInputData((p) => [...p, { id: Date.now() }]);
  }, []);

  const handleDeleteButtonClick = useCallback((dataId: number) => {
    setInputData((p) => p.filter((d) => d.id !== dataId));
  }, []);

  return (
    <Flex gap={20} direction="column">
      {inputData.map((data) => (
        <CheckboxEditorInput
          key={data.id}
          dataId={data.id}
          onClickDeleteButton={handleDeleteButtonClick}
          showDeleteButton={inputData.length !== 1}
        />
      ))}
      <UnstyledButton onClick={handleAddButtonClick}>
        <Flex gap={20} align="center">
          <Checkbox checked={false} readOnly />
          <Text color="gray.3" sx={{ fontSize: 15 }}>
            옵션 추가
          </Text>
        </Flex>
      </UnstyledButton>
    </Flex>
  );
}

export default CheckboxEditorInputGroup;
