"use client";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body className="h-full w-full relative overflow-x-hidden">
                <div className="py-16">
                    <Header />
                </div>
                <div className="flex flex-col lg:flex-row overflow-hidden gap-20">
                    <div className="w-full lg:w-auto">
                        <Profile />
                    </div>
                    <main className="w-full">{children}</main>
                </div>
            </body>
        </html>
    );
}
