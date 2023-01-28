import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Pretendard, system-ui, sans-serif",

  globalStyles: (theme) => ({
    body: {
      ...theme.fn.fontStyles(),
      margin: 0,
    },
  }),

  colors: {
    gray: [
      "#F0F0F0",
      "#D7DBDC",
      "#C4CBCD",
      "#A6B2B9",
      "#737D81",
      "#5C676A",
      "#434C4F",
      "#394245",
      "#272E31",
      "#181D1F",
    ],
    primary: ["#D9E8FF", "#A4C8FF", "#5196FF", "#1B66D7", "#0043A7"],
  },

  radius: {
    sm: 5,
  },

  components: {
    Container: {
      defaultProps: {
        sizes: {
          lg: 1194,
        },
      },
    },
  },
};
