import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import {
  Autocomplete,
  Button as MantineButton,
  ButtonProps,
} from '@mantine/core';

interface Props
  extends ButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode;
  selected?: boolean;
}

function TimeRangeButton({
  children,
  selected = false,
  disabled,
  ...props
}: Props) {
  return (
    <MantineButton
      variant={selected ? 'filled' : 'outline'}
      disabled={disabled}
      styles={(theme) => ({
        root: {
          backgroundColor: selected ? theme.colors.primary[1] : theme.white,
          padding: '20px 80px',
          height: 'auto',
          fontSize: '15px',
          fontWeight: 400,
          border: `1px solid ${
            selected ? theme.colors.primary[2] : theme.colors.gray[1]
          }`,
          color: theme.black,
        },
        inner: {
          height: 'auto',
        },
        '&:hover': {
          backgroundColor: selected
            ? 'unset'
            : theme.fn.darken(theme.colors.primary[2], 0.05),
        },
      })}
      {...props}
    >
      {children}
    </MantineButton>
  );
}

export default TimeRangeButton;
