import React from "react";
import { ApplicantState } from "types/api";
import { Badge as MantineBadge } from "@mantine/core";

interface Props {
  state: ApplicantState;
}

function Badge({ state }: Props) {
  switch (state) {
    case "FAIL":
      return <MantineBadge color="red">불합격</MantineBadge>;
    case "PASS":
      return <MantineBadge color="blue">합격</MantineBadge>;
    case "UNDEFINED":
      return <MantineBadge color="gray">제출함</MantineBadge>;
  }
}

export default Badge;
