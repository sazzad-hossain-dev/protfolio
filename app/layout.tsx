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
        <html lang="en" className="overflow-x-hidden lg:overflow-x-visible">
            <body className="h-full w-full relative overflow-x-hidden lg:overflow-x-visible">
                <div className="py-10">
                    <Header />
                </div>
                <div className="flex flex-col lg:flex-row min-h-screen gap-20 w-full">
                    <div className="w-full lg:w-[400px] lg:min-h-screen lg:sticky top-20 md:ml-10">
                        <Profile />
                    </div>

                    <main className="w-full overflow-x-hidden lg:overflow-x-visible">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
