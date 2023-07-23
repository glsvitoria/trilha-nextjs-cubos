import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <main className="flex flex-col justify-between w-full h-full relative">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
