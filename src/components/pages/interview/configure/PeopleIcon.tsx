import { Flex } from '@mantine/core';
import PersonOutlineIcon from 'components/common/icons/PersonOutlineIcon';
import React from 'react';
import PersonFilledIcon from '../../../common/icons/PersonFilledIcon';

interface Props {
  interviewee: string; // 면접 대상자 명수
  interviewer: string; // 면접관 명수
}

function PeopleIcon({ interviewee, interviewer }: Props) {
  if (interviewer === '1' && interviewee === '1') {
    return (
      <Flex
        gap="8px"
        direction="row"
        align="center"
        justify="space-between"
        sx={{ width: '30%', marginBottom: 13 }}
      >
        <Flex gap="8px" direction="row" align="center">
          <PersonFilledIcon />
        </Flex>
        <Flex gap="8px" direction="row" align="center">
          <PersonOutlineIcon />
        </Flex>
      </Flex>
    );
  }
  if (interviewer === '1' && interviewee === 'n') {
    return (
      <Flex
        gap="8px"
        direction="row"
        align="center"
        justify="space-between"
        sx={{ width: '80%', marginBottom: 13 }}
      >
        <Flex gap="8px" direction="row" align="center">
          <PersonFilledIcon />
        </Flex>
        <Flex gap="8px" direction="row" align="center">
          <PersonOutlineIcon />
          <PersonOutlineIcon />
          <PersonOutlineIcon />
        </Flex>
      </Flex>
    );
  }
  if (interviewer === 'n' && interviewee === '1') {
    return (
      <Flex
        gap="8px"
        direction="row"
        align="center"
        justify="space-between"
        sx={{ width: '80%', marginBottom: 13 }}
      >
        <Flex gap="8px" direction="row" align="center">
          <PersonFilledIcon />
          <PersonFilledIcon />
          <PersonFilledIcon />
        </Flex>
        <Flex gap="8px" direction="row" align="center">
          <PersonOutlineIcon />
        </Flex>
      </Flex>
    );
  }
  if (interviewer === 'n' && interviewee === 'n') {
    return (
      <Flex
        gap="8px"
        direction="row"
        align="center"
        justify="space-between"
        sx={{ width: '80%', marginBottom: 13 }}
      >
        <Flex gap="8px" direction="row" align="center">
          <PersonFilledIcon />
          <PersonFilledIcon />
        </Flex>
        <Flex gap="8px" direction="row" align="center">
          <PersonOutlineIcon />
          <PersonOutlineIcon />
        </Flex>
      </Flex>
    );
  }
  return <></>;
}

export default PeopleIcon;
