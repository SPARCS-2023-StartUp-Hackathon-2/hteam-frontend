import React from 'react';
import { Flex, FlexProps, Text } from '@mantine/core';

interface Props extends FlexProps {
  title: string;
  type: string;
  description: string;
}

function InterviewInfoSet({ title, type, description, ...props }: Props) {
  return (
    <Flex direction="column" gap="16px" {...props}>
      <Text
        c="gray.8"
        sx={(theme) => ({
          fontSize: '24px',
          fontWeight: 600,
        })}
      >
        {title}
      </Text>
      <Text
        c="gray.8"
        sx={(theme) => ({
          fontSize: '15px',
          fontWeight: 400,
        })}
      >
        {type}
      </Text>
      <Text
        c="gray.8"
        sx={(theme) => ({
          fontSize: '14px',
          fontWeight: 400,
        })}
      >
        {description}
      </Text>
    </Flex>
  );
}

export default InterviewInfoSet;
