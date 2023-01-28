import { Flex, Slider, Text } from "@mantine/core";
import { SLIDER_STEPS, SLIDER_VALUES } from "constants/steps";
import useRecruitment from "hooks/useRecruitment";
import useRecruitments from "hooks/useRecruitments";
import { useState } from "react";
import { RecruitmentState } from "types/api";
import { dateObjectToDateString } from "utils/date";

interface Props {
  currentState: RecruitmentState;
  startAt?: string;
  endAt?: string;
  variant?: "small" | "big";
}

function findSliderValueIndexByState(currentState: RecruitmentState) {
  switch (currentState) {
    case "PREPARING":
      return 0;
    case "FORM":
      return 1;
    case "INTERVIEW":
      return 2;
    case "COMPLETE":
      return 3;
  }
}

// Slider 로 만들어보기
function RecruitmentProcessGraph({ currentState, startAt, endAt, variant = "small" }: Props) {
  const [value, setValue] = useState(40);

  return (
    <Flex direction="column" sx={{ position: "relative" }}>
      {variant === "big" && (
        <>
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "13px",
              fontWeight: 400,
              position: "absolute",
              top: -20,
              right: -30,
            })}
          >
            {endAt}
          </Text>
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "13px",
              fontWeight: 400,
              position: "absolute",
              top: -20,
              left: -40,
            })}
          >
            {startAt}
          </Text>
        </>
      )}
      <Slider
        marks={SLIDER_STEPS}
        value={SLIDER_VALUES[findSliderValueIndexByState(currentState)]}
        sx={{
          width: variant === "small" ? 306 : 616,
        }}
        size="sm"
      />
    </Flex>
  );
}

export default RecruitmentProcessGraph;
