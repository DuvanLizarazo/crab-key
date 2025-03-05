import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FC, BarChart, PieChart } from "@/components/ui/charts";

const mockData = [
  { day: 1, temperature: 36.5, heartRate: 72 },
  { day: 2, temperature: 37.0, heartRate: 75 },
  { day: 3, temperature: 38.1, heartRate: 90 },
];

export const ChartPatients = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card>
      <CardHeader>Vital Signs</CardHeader>
      <CardContent>
        <FC data={mockData} keys={["temperature", "heartRate"]} index="day" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>Lab Results</CardHeader>
      <CardContent>
        <BarChart data={mockData} keys={["temperature"]} index="day" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>Treatment Response</CardHeader>
      <CardContent>
        <PieChart
          data={[
            { name: "Remission", value: 60 },
            { name: "Stable", value: 25 },
            { name: "Progression", value: 15 },
          ]}
        />
      </CardContent>
    </Card>
  </div>
);
