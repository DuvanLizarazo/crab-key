import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/main-layout"
import Statistics from "./pages/statistics/statistics"
import PatientForm from "./pages/patients/patient-form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="Dashboard/Statistics" element={<Statistics />} />
          <Route path="/Patients/Register" element={<PatientForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
