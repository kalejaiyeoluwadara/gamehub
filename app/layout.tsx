import { Providers } from "./provider";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description" />
        <title>GameHub</title>
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
