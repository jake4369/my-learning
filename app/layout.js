import "@styles/index.css";

import Header from "@components/Layout/Header";

export const metadata = {
  title: "My Learning",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
