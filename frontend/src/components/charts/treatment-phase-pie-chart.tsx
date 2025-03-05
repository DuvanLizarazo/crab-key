"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { treatmentPhase: "Induction", visitors: 1, fill: "var(--color-induction)" },
    { treatmentPhase: "Consolidation", visitors: 3, fill: "var(--color-consolidation)" },
    { treatmentPhase: "Maintenance", visitors: 2, fill: "var(--color-maintenance)" },
    { treatmentPhase: "Reinduction", visitors: 5, fill: "var(--color-relapse)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    induction: {
        label: "induction",
        color: "hsl(var(--chart-1))",
    },
    consolidation: {
        label: "consolidation",
        color: "hsl(var(--chart-2))",
    },
    maintenance: {
        label: "maintenance",
        color: "hsl(var(--chart-3))",
    },
    relapse: {
        label: "relapse",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function ActiveTreatments() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    return (
        <Card className="flex flex-col text-neutral-700">
            <CardHeader className="items-center pb-0 text-neutral-50">
                <CardTitle>Treatment Phase Distribution</CardTitle>
                <CardDescription>
                    {new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="treatmentPhase"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill="white"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                    fill="white"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Patients
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2 font-medium leading-none text-neutral-50">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing distribution of treatment phases
                </div>
            </CardFooter>
        </Card>
    )
}
