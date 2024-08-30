import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navibar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <Link href="/">Ruben Freire Andrade</Link>
      </NavbarContent>
      <NavbarContent className="gap-8" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              // className={clsx(
              //   linkStyles({ color: "foreground" }),
              //   "data-[active=true]:text-primary data-[active=true]:font-medium",
              // )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <div className="px-3">
        <ThemeSwitch />
      </div>
    </NextUINavbar>
  );
};
