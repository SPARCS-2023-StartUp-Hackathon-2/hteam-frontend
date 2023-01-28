import { Flex } from "@mantine/core";
import { ComponentProps, ReactElement, cloneElement, useState } from "react";

interface Props extends ComponentProps<typeof Flex> {
  addibleComponent: ReactElement;
  addButton: ReactElement;
}

interface DataType {
  id: number;
  content: string;
}

function AddibleGroup({ addibleComponent, addButton, ...props }: Props) {
  const [data, setData] = useState<DataType[]>([]);

  const AddibleComponent = cloneElement(addibleComponent);

  return <Flex gap={20} direction="column" {...props}></Flex>;
}

export default AddibleGroup;
