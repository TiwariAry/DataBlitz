import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = ({ user } : {user: User}) => {
    return (
        <header className={"sticky top-0 header"}>
            <div className={"container header-wrapper"}>
                <Link href={"/"} className={"flex gap-3 justify-end"}>
                    <Image src={"/assets/icons/logo.png"} alt="DataBlitz logo" width={140} height={32} className={"h-8 w-auto cursor-pointer"}/>
                    <p className={"text-white font-bold text-3xl"}>DataBlitz</p>
                </Link>
                <nav className={"hidden sm:block"}>
                    <NavItems/>
                </nav>

                <UserDropdown user={user}/>
            </div>
        </header>
    )
}
export default Header
