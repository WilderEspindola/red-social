import Navbar from "@/components/Navbar";
import SideBarArchivo from "@/components/SideBarArchivo";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Archivo",
    description: "creacion del archivo",
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
                        <SideBarArchivo/>
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
