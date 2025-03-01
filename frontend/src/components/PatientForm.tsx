import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface PatientFormData {
  name: string;
  age: number;
  weight: number;
  height: number;
  body_surface_area: number;
}

const PatientForm = () => {
  const [formData, setFormData] = useState<PatientFormData>({
    name: "",
    age: 0,
    weight: 0,
    height: 0,
    body_surface_area: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "name" ? value : parseFloat(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Patient created successfully!");
      setFormData({ name: "", age: 0, weight: 0, height: 0, body_surface_area: 0 });
    } else {
      alert("Failed to create patient.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-blue-900">Create Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "age", "weight", "height", "body_surface_area"].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1 capitalize">{field.replace("_", " ")}:</label>
                <Input
                  type={field === "name" ? "text" : "number"}
                  name={field}
                  value={formData[field as keyof PatientFormData]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.replace("_", " ")}`}
                  className="p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientForm;
