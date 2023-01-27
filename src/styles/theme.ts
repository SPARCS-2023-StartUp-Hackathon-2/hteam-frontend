import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Pretendard, system-ui, sans-serif",

  globalStyles: (theme) => ({
    html: {
      backgroundColor: "#eee",
    },
    body: {
      ...theme.fn.fontStyles(),
      margin: "0 auto",
      maxWidth: theme.breakpoints.xs,
    },
  }),
};
