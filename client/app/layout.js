import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ApolloProvider } from "@apollo/client";
import client from "@/components/AppoloAPI";
import ApolloWrapper from "@/components/AppoloWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GraphQL + Next.js",
  keywords: "GraphQL, Next.js, Apollo Client, React, Web Development",
  authors: [{ name: "Koffie Agbobah | Cynowave Technologies", url: "#" }],
  description: "Generate a full-stack application using GraphQL and Next.js",
  creator: "Koffie Agbobah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ApolloWrapper>
           {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
