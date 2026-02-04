import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-background">{children}</div>
      <Footer />
    </>
  );
}
