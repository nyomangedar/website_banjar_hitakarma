import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body className="font-primary">
                <Navbar />
                <main>{children}</main>
                <div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
