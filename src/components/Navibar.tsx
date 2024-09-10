import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navibar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent justify="start">
          <Link href="/">{siteConfig.name}</Link>
        </NavbarContent>
        <NavbarContent className="gap-8" justify="end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              onMouseEnter={() => setDropdownOpen(item.label === "Projects")}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>

              {item.children && dropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded">
                  {item.children.map((subItem) => (
                    <Link
                      key={subItem.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      href={subItem.href}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>
        <div className="px-3">
          <ThemeSwitch />
        </div>
      </NextUINavbar>
      {children}
    </>
  );
};
