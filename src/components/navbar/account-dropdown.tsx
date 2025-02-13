import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/src/components/ui/dropdown-menu"
import { Button } from "@/src/components/ui/button"
import { CircleUser } from "lucide-react"
import { logout } from "@/src/app/auth/actions"


export function AccountDropdown({}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  </>
  )
}
