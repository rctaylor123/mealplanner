'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/src/components/ui/navigation-menu';
import { UtensilsCrossed } from 'lucide-react';

export function NavLinks() {
  return (
    <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
      <UtensilsCrossed className='h-6 w-6' />
      <span className='sr-only'>Acme Inc</span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavLink href='/docs' title='Meals' />
          <NavLink href='/docs' title='Documentation' />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <NavigationMenuItem>
      <Link href={props.href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {props.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
