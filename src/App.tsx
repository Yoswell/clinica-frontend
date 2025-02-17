import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { AddPacient } from "@/pages/patient/AddPacient";
import { ListPacient } from "@/pages/patient/ListPacient";
import { AddMedic } from "@/pages/doctor/AddMedic";
import { ListMedic } from "@/pages/doctor/ListMedic";
import { AddService } from "@/pages/service/AddService";
import { ListService } from "@/pages/service/ListServices";
import { AddPackage } from "@/pages/package/AddPackage";
import { ListPackage } from "@/pages/package/ListPackage";
import { AddConsult } from "@/pages/consult/AddConsult";
import { ListSpeciality } from "@/pages/speciality/ListSpeciality";
import { Login } from "@/pages/login/Login";
import { PrivateRoute } from "./routes/PrivateRoute";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { DoctorProfile } from "./pages/doctor/DoctorProfile";
import { PatientProfile } from "./pages/patient/PatientProfile";

export default function App() {
  return (
    <div className="blur1">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          {/* Rutas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />}></Route>
            
            <Route path="/service/add" element={<AddService />}></Route>
            <Route path="/services" element={<ListService />}></Route>

            <Route path="/package/add" element={<AddPackage />}></Route>
            <Route path="/packages" element={<ListPackage />}></Route>

            <Route path="/consult/add" element={<AddConsult />}></Route>
            <Route path="/specialities" element={<ListSpeciality />}></Route>

            <Route path="/doctors/:id" element={<DoctorProfile />}></Route>
            <Route path="/patients/:id" element={<PatientProfile/>}></Route>
            <Route path="/pacients" element={<ListPacient />}></Route>

            <Route path="/medics" element={<ListMedic />}></Route>
          </Route>

          {/* Rutas protegidas con roles */}
          <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/pacient/add" element={<AddPacient />}></Route>
            <Route path="/medic/add" element={<AddMedic />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
