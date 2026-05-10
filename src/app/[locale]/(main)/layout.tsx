import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100svh-160px)]"> {children}</main>
      <Footer />
    </>
  );
}
