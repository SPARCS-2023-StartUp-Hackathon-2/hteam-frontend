import { TextInput as MantineTextInput } from "@mantine/core";
import { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<typeof MantineTextInput>, "size"> {
  size?: "lg" | "sm";
}

function TextInput({ size = "lg", ...props }: Props) {
  return (
    <MantineTextInput
      variant="unstyled"
      styles={(theme) => ({
        root: {
          width: 300,
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[8],
          fontSize: 15,
        },
        input: {
          padding: size === "lg" ? "10px 20px" : "10px",
          height: "auto",
          fontSize: 15,
          lineHeight: "100%",
        },
        label: {
          fontSize: 14,
        },
      })}
      placeholder="입력란 예시"
      {...props}
    />
  );
}

export default TextInput;
