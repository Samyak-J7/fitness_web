'use client';
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Our Plans"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Plans</HoveredLink>
            <HoveredLink href="/courses">
              Calorie Calculator
            </HoveredLink>
            <HoveredLink href="/courses">
              Workout Tutorials
            </HoveredLink>
            <HoveredLink href="/courses">Meal Plans</HoveredLink>
            <HoveredLink href="/courses">
              Custom Routines
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">

            </MenuItem>
            </Link>
            <SignedIn><UserButton /></SignedIn>
            <SignedOut><SignInButton/></SignedOut>
            
                    
        </Menu>
    </div>
  )
}

export default Navbar