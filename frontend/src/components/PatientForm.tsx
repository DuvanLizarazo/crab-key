import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";

interface PatientFormData {
  name: string;
  age: number;
  weight: number;
  height: number;
  body_surface_area: number;
}

const fieldLabels: Record<keyof PatientFormData, string> = {
  name: "Name",
  age: "Age",
  weight: "Weight",
  height: "Height",
  body_surface_area: "Body Surface Area",
};

const fieldUnits: Record<keyof PatientFormData, string> = {
  name: "",
  age: "Age in years",
  weight: "Weight in Kg (Kilograms)",
  height: "Height in Cm (Centimeters)",
  body_surface_area: "Area in square meters (m²)",
};

const PatientForm = () => {
  const form = useForm<PatientFormData>({
    defaultValues: {
      name: "",
      age: 0,
      weight: 0,
      height: 0,
      body_surface_area: 0,
    },
  });

  const onSubmit = async (data: PatientFormData) => {
    const response = await fetch("http://127.0.0.1:8000/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Patient created successfully!");
      form.reset();
    } else {
      alert("Failed to create patient.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-50">
      <Card className="w-full max-w-md bg-neutral-950 border border-neutral-700">
        <CardHeader>
          <CardTitle className="text-left text-2xl text-neutral-50">Register Patient</CardTitle>
          <p className="text-left text-sm text-neutral-400">Enter your patient details below to register it in the database.</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {Object.keys(fieldLabels).map((field) => (
                <FormItem key={field}>
                  <FormLabel className="text-sm font-medium text-neutral-50 capitalize">
                    {fieldLabels[field as keyof PatientFormData]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={field === "name" ? "text" : "number"}
                      {...form.register(field as keyof PatientFormData)}
                      placeholder={`Enter ${fieldLabels[field as keyof PatientFormData]}`}
                      className="mt-1"
                      required
                    />
                  </FormControl>
                  <p className="text-xs text-neutral-400">{fieldUnits[field as keyof PatientFormData]}</p>
                  <FormMessage />
                </FormItem>
              ))}
              <Button type="submit" className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950">
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientForm;
