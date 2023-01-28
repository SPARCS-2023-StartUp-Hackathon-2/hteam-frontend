import { Box } from '@mantine/core';
import React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function CommonUserResponseFormBox({ children }: Props) {
  return (
    <Box
      sx={{
        boxShadow: ' 0px 0px 30px 2px rgba(0, 0, 0, 0.1);',
        width: 'max-content',
      }}
    >
      {children}
    </Box>
  );
}

export default CommonUserResponseFormBox;
