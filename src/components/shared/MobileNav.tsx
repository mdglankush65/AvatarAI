"use client";
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2' >
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src='/assets/icons/menu.svg'
                                alt="menu"
                                height={32}
                                width={32}
                                className='cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image src="/assets/images/logo-text.svg" alt="logo" width={152} height={23} />
                                <ul className="header-nav_elements">
                                    {
                                        navLinks.map((link) => {
                                            const isActive = link.route === pathname;
                                            return <li key={link.route} className={`
                                              ${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700
                                            `} >
                                                <Link href={link.route} className='sidebar-link cursor-pointer'>
                                                    <Image
                                                        src={link.icon}
                                                        alt={link.label}
                                                        height={24}
                                                        width={24}
                                                    />{link.label}
                                                </Link>
                                            </li>
                                        }
                                        )
                                    }
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href="/auth/sign-in">SignIn</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
