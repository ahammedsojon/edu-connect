import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppis" });

export const metadata = {
  title: "EduConnect - Wold's Best Learning Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
