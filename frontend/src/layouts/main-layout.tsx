import { Outlet, useLocation } from "react-router-dom"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function MainLayout() {
  const location = useLocation()
  const pathSegments = location.pathname.split("/").filter(Boolean)

  return (
    <SidebarProvider className="bg-neutral-900">
      <div className="flex h-screen w-screen ">
        <AppSidebar className="bg-neutral-900" />
        <div className="flex-1 flex flex-col h-screen">
          <header className="flex h-16 shrink-0 items-center gap-2 bg-neutral-950 text-neutral-50 px-12">
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                  const isLast = index === pathSegments.length - 1;
                  const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

                  return (
                    <BreadcrumbItem key={path}>
                      {isLast ? (
                        <BreadcrumbPage>{segment}</BreadcrumbPage>
                      ) : (
                        <span className="text-muted-foreground">{segment}</span>
                      )}
                      {!isLast && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <SidebarInset className="flex-1 overflow-auto bg-neutral-950">
            <Outlet />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
