import React, { ButtonHTMLAttributes } from 'react';
import { Button as MantineButton, ButtonProps } from '@mantine/core';

interface Props
  extends ButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

function Button({ children, ...props }: Props) {
  return (
    <MantineButton
      {...props}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.primary[2],
          border: 0,
          height: 42,
          padding: '10px 20px',

          fontWeight: 600,
          color: theme.white,

          borderRadius: '100px', // TODO: 세로는 둥글게 부여, 일단 크게 줌
          '&:hover': {
            backgroundColor: theme.fn.darken(theme.colors.primary[2], 0.05),
          },
        },
      })}
    >
      {children}
    </MantineButton>
  );
}

export default Button;
