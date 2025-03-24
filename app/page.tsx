import Image from "next/image";
import Header from "@/components/Header"; // Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-1 flex 
                      flex-col 
                      items-center 
                      justify-center p-8 
                      pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Home</h1>
        <p>The quick brown fox jumps over the lazy dogs.</p>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
