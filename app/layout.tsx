import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "./asset/logo.png";
import Navbar from "./Navbar";

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
                    <p>This is the footer</p>
                </div>
                <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
            </body>
        </html>
    );
}
