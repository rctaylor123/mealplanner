

import { AccountDropdown } from "./account-dropdown"
import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"

export function Navbar({}: React.ComponentPropsWithoutRef<"div">) {
  return (
    
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <NavLinks />
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <NavSearch />
        <AccountDropdown />
      </div>
  </header>
  )
}
