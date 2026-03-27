import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: LayoutProps) => (
  <div className={`container-custom ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = "" }: LayoutProps) => (
  <section className={`section-padding ${className}`}>
    {children}
  </section>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow">
      {children}
    </main>
  );
}
