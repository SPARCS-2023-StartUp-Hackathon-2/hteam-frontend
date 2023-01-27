import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",

  globalStyles: (theme) => ({
    body: {
      ...theme.fn.fontStyles(),
      margin: 0,
    },
  }),
};
