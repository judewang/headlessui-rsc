import React from "react";
import "../styles/globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
