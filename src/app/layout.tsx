import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import " ./global.css";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
