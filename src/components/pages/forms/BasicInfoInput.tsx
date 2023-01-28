import { Flex, Text } from "@mantine/core";
import TextInput from "components/common/TextInput";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof TextInput> {
  order: number;
  title: string;
  placeholder?: string;
}

function BasicInfoInput({ order, title, placeholder = title, ...props }: Props) {
  return (
    <Flex gap={21} align="flex-start">
      <Flex gap={9} align="center">
        <Text fw="bold" color="gray.8" sx={{ fontSize: 32 }}>
          1
        </Text>
        <Text fw="bold" color="gray.4" sx={{ fontSize: 24 }}>
          - {order}
        </Text>
      </Flex>

      <Flex direction="column" gap={15} sx={{ marginTop: 8 }}>
        <Text color="gray.8" sx={{ fontSize: 20 }}>
          {title}
        </Text>
        <TextInput placeholder={placeholder} {...props} />
      </Flex>
    </Flex>
  );
}

export default BasicInfoInput;
