'use client' // needed because of bug in nextui https://github.com/nextui-org/nextui/issues/1403#issuecomment-1678863519

import Image  from "next/image";
import CuttleNetLogo from '@/public/cuttlefish-logo-transparent.png'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { MdOutlineFindInPage, MdOutlineScience } from "react-icons/md";

export const NavMenu = () => (
    <Navbar isBordered>
        <NavbarBrand>
            <Image src={CuttleNetLogo} alt="CuttleNet" width={36} height={36} className="mx-2.5"  />
            <p className="font-bold text-inherit color-white">CuttleNet</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link href="/" color="primary">
                    <p >Home</p>
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/about" color="primary">
                    <p >About</p>
                </Link>
            </NavbarItem>
            <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            color="secondary"
                            startContent={<MdOutlineFindInPage />}
                            radius="sm"
                            variant="light"
                            >
                            Pages Directory
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    aria-label="pages"
                    className="w-[340px]"
                    itemClasses={{
                     base: "gap-4",
                    }}>
                        <DropdownItem
                            key="pages_home"
                            description="The Root of All our Problems"
                            startContent={<MdOutlineScience />}
                            >
                                <Link href="/p">
                                    Pages Home
                                </Link>
                        </DropdownItem>
                        <DropdownItem
                            key="demo"
                            description="The Original Pages Page"
                            startContent={<MdOutlineScience />}
                            >
                                <Link href="/p/demo">
                                    Demo    
                                </Link>
                            </DropdownItem>
                    </DropdownMenu>
            </Dropdown>
        </NavbarContent>

    </Navbar>
);