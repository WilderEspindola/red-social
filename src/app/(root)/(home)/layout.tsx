import Navbar from "@/components/Navbar";
import SideBarHome from "@/components/SideBarHome";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home",
    description: "creacion del home",
};

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="relative">
                    <Navbar/>
                    <div className="flex">
                        <SideBarHome/>
                        <section className="flex min-h-screen flex-1 flex-col px-6  pb-6 pt-28
 max-md:pb-14 sm:px-14">
                            <div className="w-full">
                            {children}
                            </div>
                        </section>
                    </div>
                </main>
            </body>
        </html>
    );
}
