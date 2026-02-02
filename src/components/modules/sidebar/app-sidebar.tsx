import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SearchForm } from "./search-form";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Profile",
      url: "/profile",
      isActive: true,
    },
    {
      title: "Orders",
      url: "/order",
    },
    {
      title: "Reviews",
      url: "/review",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarMenu>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={item.isActive}>
                  <a href={item.url}>{item.title}</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
