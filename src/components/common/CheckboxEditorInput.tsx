import { ActionIcon, Checkbox, Flex, useMantineTheme } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import TextInput from "components/common/TextInput";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof TextInput> {
  dataId: number;
  onClickDeleteButton: (dataId: number) => void;
  showDeleteButton?: boolean;
}

function CheckboxEditorInput({
  dataId,
  onClickDeleteButton,
  showDeleteButton = true,
  ...props
}: Props) {
  const theme = useMantineTheme();

  return (
    <Flex gap={12} align="center">
      <Checkbox checked={false} readOnly />
      <TextInput size="sm" {...props} />
      {showDeleteButton && (
        <ActionIcon variant="transparent" onClick={() => onClickDeleteButton(dataId)}>
          <IconX size={24} color={theme.colors.gray[8]} />
        </ActionIcon>
      )}
    </Flex>
  );
}

export default CheckboxEditorInput;
