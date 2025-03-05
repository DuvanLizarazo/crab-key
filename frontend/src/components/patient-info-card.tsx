import { Patient } from "@/types/patient";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface PatientInfoCardProps {
  patient: Patient;
}

export const PatientInfoCard = ({ patient }: PatientInfoCardProps) => (
  <Card>
    <CardHeader>Patient Information</CardHeader>
    <CardContent>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Weight: {patient.weight} kg</p>
      <p>Height: {patient.height} m</p>
      <p>BSA: {patient.body_surface_area} m²</p>
    </CardContent>
  </Card>
);
