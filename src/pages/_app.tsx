import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { theme } from "styles/theme";
import PageLayout from "components/common/PageLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
