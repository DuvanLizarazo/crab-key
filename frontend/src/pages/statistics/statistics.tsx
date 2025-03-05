import { ActiveTreatments } from "@/components/charts/treatment-phase-pie-chart"

export default function Statistics() {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-neutral-950">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 ">
          <ActiveTreatments />
          <div className="aspect-video rounded-xl bg-neutral-900" />
          <div className="aspect-video rounded-xl bg-neutral-900" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-900 md:min-h-min" />
      </div>
    )
  }