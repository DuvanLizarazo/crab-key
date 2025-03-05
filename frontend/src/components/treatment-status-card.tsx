import { Patient } from "@/types/patient";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TreatmentStatusCardProps {
  patient: Patient;
}

export const TreatmentStatusCard = ({ patient }: TreatmentStatusCardProps) => (
  <Card>
    <CardHeader>Treatment Status</CardHeader>
    <CardContent>
      {patient.treatment_plan ? (
        <>
          <p>Current Phase: {patient.treatment_plan.current_phase}</p>
          <p>Day: {patient.treatment_plan.current_day}</p>
          <p>Start Date: {patient.treatment_plan.start_date}</p>
        </>
      ) : (
        <Button onClick={() => alert("Redirect to treatment generation page")}>
          Generate Treatment Plan
        </Button>
      )}
    </CardContent>
  </Card>
);
