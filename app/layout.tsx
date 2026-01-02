import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Scalf.io | Stop Looking Start Searching",
  description:
    "Scalf.io is a campus management website that help student find hostels and services just by a click on their mobile phones. As a service provider you can manage your service, receive payments, announce new achievements just by registering with us. Register once and once only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans w-full antialiased relative`}>
        <Analytics debug={false} />
        <SpeedInsights debug={false} />
        <main className="w-full font-sans ">{children}</main>
      </body>
    </html>
  );
}
