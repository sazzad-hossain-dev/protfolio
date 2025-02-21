"use client";
import Profile from "@/components/Profile";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="h-full w-full relative overflow-x-hidden">
                <div className="py-16">
                    <Header />
                </div>
                <div className="flex">
                    <div>
                        <Profile />
                    </div>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
