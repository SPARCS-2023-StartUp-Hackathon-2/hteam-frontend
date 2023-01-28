import { createStyles, Select, SelectProps } from '@mantine/core';
import ArrowDownIcon from 'components/common/icons/ArrowDownIcon';
import React from 'react';

interface Props extends SelectProps {
  kind?: 'default' | 'big';
}

// usage
{
  /* <Dropdown
label="Your favorite framework/library"
placeholder="Pick one"
data={[
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
]}
/> */
}

function Dropdown({ kind = 'default', ...props }: Props) {
  return (
    <Select
      rightSection={<ArrowDownIcon />}
      rightSectionWidth={50}
      styles={(theme) => ({
        input: {
          padding:
            kind === 'default' ? '10px 18px 11px 20px' : '14px 24px 15px 20px',
          height: 'auto',
          lineHeight: '100%',
          fontSize: '15px',
          border: `1px solid ${theme.colors.gray[1]}`,
        },
        rightSection: { pointerEvents: 'none' },
        dropdown: {
          // dropdown 아이템들을 포함하는 container
          // TODO: 이거 간격 7px 로 조정하기
        },
        label: {
          marginBottom: 16,
        },
      })}
      {...props}
    />
  );
}

export default Dropdown;
