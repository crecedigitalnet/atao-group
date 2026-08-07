import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-dvh flex-col bg-background">
    <Header />
    <main id="contenido" className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
