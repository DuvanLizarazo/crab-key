import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
import { useForm } from "react-hook-form";

interface PatientData {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  body_surface_area: number;
  current_phase?: string;
  current_day?: number;
  total_days?: number;
  treatment?: {
    phase: string;
    medications: { name: string; dosage: string; frequency: string }[];
  };
}

const PatientOverview = () => {
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<{ id: number }>({
    defaultValues: { id: 0 },
  });

  const fetchPatient = async (id: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/patients/${id}`);
      if (!response.ok) {
        throw new Error("Patient not found");
      }
      const data = await response.json();
      setPatient(data);
      setError(null);
    } catch (err) {
      setPatient(null);
      setError("Patient not found");
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-8 bg-neutral-950 text-neutral-50">
      {/* Title */}
      <h1 className="text-2xl font-bold text-neutral-50">Patient Overview</h1>

      {/* Search Form */}
      <Card className="w-full max-w-lg bg-neutral-950">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(({ id }) => fetchPatient(id))}
              className="flex items-center gap-4"
            >
              <div className="flex-1">
                <FormItem>
                  <FormLabel className="text-sm font-medium text-neutral-50">Patient ID</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...form.register("id")}
                      placeholder="Enter Patient ID"
                      required
                    />
                  </FormControl>
                  <p className="text-xs text-neutral-400">Enter the patient’s ID</p>
                  <FormMessage />
                </FormItem>
              </div>
              <Button type="submit" className="bg-neutral-50 hover:bg-amber-400 text-neutral-950 h-10">
                Search
              </Button>
            </form>
          </Form>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </CardContent>
      </Card>

      {/* Patient Info */}
      {patient && (
        <Card className="w-full max-w-lg bg-neutral-950 border border-neutral-800">
          <CardHeader>
            <CardTitle className="text-xl text-neutral-50">Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age} years</p>
            <p><strong>Weight:</strong> {patient.weight} kg</p>
            <p><strong>Height:</strong> {patient.height} cm</p>
            <p><strong>Body surface area:</strong> {patient.body_surface_area} m2</p>
            {patient.treatment ? (
              <>
                <p><strong>Current Phase:</strong> {patient.current_phase}</p>
                <p><strong>Current Day:</strong> {patient.current_day}/{patient.total_days}</p>
                <h3 className="text-lg font-semibold mt-4">Medications:</h3>
                <ul className="list-disc pl-5">
                  {patient.treatment.medications.map((med: any, index: number) => (
                    <li key={index}>
                      {med.name} - {med.dosage} - {med.frequency}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Button
                className="bg-amber-400 text-neutral-950 w-full mt-4"
                onClick={() => console.log("Navigate to treatment generation")}
              >
                Generate Treatment Plan
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PatientOverview;
