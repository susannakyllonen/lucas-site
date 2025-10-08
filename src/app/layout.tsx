import ClientRoot from "../components/ClientRoot";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lucas Kyllönen",
  description: "Official website of football player Lucas Kyllönen",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Lucas Kyllönen ⚽️",
    description: "Finnish football player – official website",
    url: "https://lucaskyllonen.com",
    siteName: "Lucas Kyllönen",
    images: [
      {
        url: "https://lucaskyllonen.com/header-lucas.jpeg",
        width: 1200,
        height: 630,
        alt: "Lucas Kyllönen on the field",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={inter.variable}>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
