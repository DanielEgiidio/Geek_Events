import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex w-full border-b items-center justify-between mt-4 p-4 px-8 h-[60px]">
      <Link href="/" className="w-48 flex items-center">
        <Logo size={35} />
        <h2 className="font-extrabold p-medium-20 pl-2 dark:text-white ">
          Geek Events
        </h2>
      </Link>

      <SignedIn>
        <nav className="md:flex-between items-center text-center hidden w-full max-w-xs md:block">
          <NavItems />
        </nav>
      </SignedIn>

      <div className="flex gap-4 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>

        <ThemeSwitcher />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
