import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function Statistics() {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-neutral-950">
        <header className="flex h-16 shrink-0 items-center gap-2 bg-neutral-950 text-neutral-50">
          <div className="flex items-center gap-2 px-4">
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 ">
          <div className="aspect-video rounded-xl bg-neutral-900" />
          <div className="aspect-video rounded-xl bg-neutral-900" />
          <div className="aspect-video rounded-xl bg-neutral-900" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-900 md:min-h-min" />
      </div>
    )
  }
