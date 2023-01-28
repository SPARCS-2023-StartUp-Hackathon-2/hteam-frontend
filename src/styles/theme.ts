import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Pretendard, system-ui, sans-serif',

  globalStyles: (theme) => ({
    html: {
      backgroundColor: '#eee',
    },
    body: {
      ...theme.fn.fontStyles(),
      margin: 0,
    },
  }),

  colors: {
    gray: [
      '#FOFOFO',
      '#FFFF00',
      '#C4CBCD',
      '#A6B2B9',
      '#737D81',
      '#5C676A',
      '#434C4F',
      '#394245',
      '#272E31',
      '#181D1F',
    ],
    primary: ['#D9E8FF', '#A4C8FF', '#5196FF', '#1B66D7', '#0043A7'],
  },
};
