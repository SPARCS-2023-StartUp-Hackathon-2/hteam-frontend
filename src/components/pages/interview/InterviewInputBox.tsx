import { Box, Text, Flex } from '@mantine/core';
import Button from 'components/common/Button';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  buttonText: string;
}

function InterviewInputBox({ children, title, buttonText }: Props) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: '32px',
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <Flex gap="32px" direction="column" align="center">
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontsize: '20px',
            fontWeight: 600,
          })}
        >
          {title}{' '}
        </Text>
        {children}
        <Button>{buttonText}</Button>
      </Flex>
    </Box>
  );
}

export default InterviewInputBox;
