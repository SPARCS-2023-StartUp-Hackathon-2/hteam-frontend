import React from 'react';
import { Flex, Text } from '@mantine/core';

interface Props {
  title: string;
  type: string;
  description: string;
}

function InterviewInfoSet({ title, type, description }: Props) {
  return (
    <Flex direction="column" gap="16px">
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
