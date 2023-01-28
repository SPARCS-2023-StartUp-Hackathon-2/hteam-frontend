import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { theme } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
