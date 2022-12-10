import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/organisms/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
