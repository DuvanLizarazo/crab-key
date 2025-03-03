import { Outlet } from "react-router-dom"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function MainLayout() {
  return (
    <SidebarProvider className="bg-neutral-900">
      <div className="flex h-screen w-screen">
        <AppSidebar />
        <div className="flex-1">
          <SidebarInset className="h-full">
            <Outlet />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
