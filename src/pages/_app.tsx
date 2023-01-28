import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { theme } from "styles/theme";
import PageLayout from "components/common/PageLayout";
import { AuthProvider } from "components/common/AuthProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </MantineProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
