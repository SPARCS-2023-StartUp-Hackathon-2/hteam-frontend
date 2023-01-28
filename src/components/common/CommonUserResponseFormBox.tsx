import { Box, Flex } from '@mantine/core';
import React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function CommonUserResponseFormBox({ children }: Props) {
  return (
    <Flex
      sx={{
        boxShadow: ' 0px 0px 30px 2px rgba(0, 0, 0, 0.1);',
        width: '1132px',
      }}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
}

export default CommonUserResponseFormBox;
