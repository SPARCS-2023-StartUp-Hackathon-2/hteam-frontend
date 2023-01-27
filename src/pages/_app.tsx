import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;
