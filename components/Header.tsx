"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiTool } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";

const navLinks = [
    { href: "/", icon: <FiHome className="icon" />, label: "Home" },
    {
        href: "/projects",
        icon: <GoFileDirectory className="icon" />,
        label: "Projects",
    },
    { href: "/tools", icon: <FiTool className="icon" />, label: "Tools" },
    {
        href: "/contact",
        icon: <IoMailOutline className="icon" />,
        label: "Contact",
    },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-container opacity-[0.8] w-[90%] lg:w-[300px] mx-auto rounded-lg shadow-md">
            <nav className="py-2">
                <div className="flex items-center justify-center gap-6">
                    {navLinks.map(({ href, icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`group relative p-3 text-white rounded-md transition-all duration-300 ease-in-out 
                                ${
                                    pathname === href
                                        ? "bg-[#8B48E8] "
                                        : "hover:bg-[#8B48E8]"
                                }
                            `}
                        >
                            {icon}
                            <span className=" bg-container font-poppins absolute left-1/2 -translate-x-1/2 top-16 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-sm py-2 px-2 rounded-md whitespace-nowrap">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
