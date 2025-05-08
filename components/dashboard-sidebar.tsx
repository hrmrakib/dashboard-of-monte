"use client";

import type React from "react";

import Link from "next/link";
import {
  LayoutDashboard,
  DollarSign,
  Users,
  Ticket,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function DashboardSidebar() {
  const pathname = usePathname();

  if (
    pathname === "/signin" ||
    pathname === "/create-account" ||
    pathname === "/forget-password" ||
    pathname === "/verify-password" ||
    pathname === "/verify-otp"
  ) {
    return null;
  }

  return (
    <Sidebar className='border-r border-gray-200 fixed left-0 h-full z-30'>
      <SidebarContent>
        <div className='flex items-center gap-2 px-4 py-6'>
          <Image
            src='/logo.png'
            alt='logo'
            width={190}
            height={190}
            className=''
          />
        </div>

        <SidebarMenu className='px-6'>
          <NavItem
            href='/'
            icon={LayoutDashboard}
            label='Dashboard'
            active={pathname === "/"}
          />
          <NavItem
            href='/earning'
            icon={DollarSign}
            label='Earning'
            active={pathname === "/earning" || pathname.startsWith("/earning/")}
          />
          <NavItem
            href='/users'
            icon={Users}
            label='Users'
            active={pathname === "/users" || pathname.startsWith("/users/")}
          />
          <NavItem
            href='/subscription'
            icon={Ticket}
            label='Subscription'
            active={
              pathname === "/subscription" ||
              pathname.startsWith("/subscription/")
            }
          />
          <NavItem
            href='/setting'
            icon={Settings}
            label='Setting'
            active={pathname === "/setting" || pathname.startsWith("/setting/")}
          />
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className='p-6'>
        <Link
          href='/sign-out'
          className='flex w-full items-center gap-3 bg-[#F99F04] px-4 py-3 text-white hover:bg-[#f99f04d2]'
        >
          <svg
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 16L21.5 12M21.5 12L17.5 8M21.5 12L7.5 12M13.5 16V17C13.5 18.6569 12.1569 20 10.5 20H6.5C4.84315 20 3.5 18.6569 3.5 17V7C3.5 5.34315 4.84315 4 6.5 4H10.5C12.1569 4 13.5 5.34315 13.5 7V8'
              stroke='#FAFAFA'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <span>Log out</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-4 py-2 transition-colors",
            active
              ? "bg-teal-800 text-white"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          <Icon size={18} />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

// "use client";

// import type React from "react";

// import Link from "next/link";
// import {
//   LayoutDashboard,
//   DollarSign,
//   Users,
//   Ticket,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarFooter,
// } from "@/components/ui/sidebar";
// import { usePathname } from "next/navigation";

// export default function DashboardSidebar() {
// const pathname = usePathname();

//   return (
//     <Sidebar className='border-r border-gray-200 fixed left-0 h-full z-30'>
//       <SidebarContent>
//         <div className='flex items-center gap-2 px-4 py-6'>
//           <div className='flex h-8 w-8 items-center justify-center rounded-md bg-teal-800 text-white'>
//             <span className='text-xs font-bold'>D</span>
//           </div>
//           <div className='font-semibold text-teal-800'>
//             DesignDoc
//             <div className='text-[10px] text-gray-500'>We Simplify</div>
//           </div>
//         </div>

//         <SidebarMenu className='px-6'>
//           <NavItem
//             href='/dashboard'
//             icon={LayoutDashboard}
//             label='Dashboard'
//             active={pathname}
//           />
//           <NavItem href='/earning' icon={DollarSign} label='Earning' />
//           <NavItem href='/users' icon={Users} label='Users' />
//           <NavItem href='/subscription' icon={Ticket} label='Subscription' />
//           <NavItem href='/setting' icon={Settings} label='Setting' />
//         </SidebarMenu>
//       </SidebarContent>

//       <SidebarFooter className='p-6'>
//         <Link
//           href='/logout'
//           className='flex w-full items-center gap-3 bg-[#F99F04] px-4 py-3 text-white hover:bg-[#f99f04d2]'
//         >
//           <svg
//             width='25'
//             height='24'
//             viewBox='0 0 25 24'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M17.5 16L21.5 12M21.5 12L17.5 8M21.5 12L7.5 12M13.5 16V17C13.5 18.6569 12.1569 20 10.5 20H6.5C4.84315 20 3.5 18.6569 3.5 17V7C3.5 5.34315 4.84315 4 6.5 4H10.5C12.1569 4 13.5 5.34315 13.5 7V8'
//               stroke='#FAFAFA'
//               strokeWidth='1.5'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             />
//           </svg>

//           <span>Log out</span>
//         </Link>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

// interface NavItemProps {
//   href: string;
//   icon: React.ElementType;
//   label: string;
//   active?: boolean;
// }

// function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
//   return (
//     <SidebarMenuItem>
//       <SidebarMenuButton asChild>
//         <Link
//           href={href}
//           className={cn(
//             "flex items-center gap-3 px-4 py-2 transition-colors",
//             active
//               ? "bg-teal-800 text-white"
//               : "text-gray-700 hover:bg-gray-100"
//           )}
//         >
//           <Icon size={18} />
//           <span>{label}</span>
//         </Link>
//       </SidebarMenuButton>
//     </SidebarMenuItem>
//   );
// }
