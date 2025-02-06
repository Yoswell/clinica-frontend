import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "@/pages/dashboard/Dashboard"
import { AddPacient } from "@/pages/pacient/AddPacient"
import { ListPacient } from "@/pages/pacient/ListPacient"
import { AddMedic } from "@/pages/medic/AddMedic"
import { ListMedic } from "@/pages/medic/ListMedic"
import { AddService } from "@/pages/service/AddService"
import { ListService } from "@/pages/service/ListServices"
import { AddPackage } from "@/pages/package/AddPackage"
import { ListPackage } from "@/pages/package/ListPackage"
import { AddConsult } from "@/pages/consult/AddConsult"
import { ListSpeciality } from "@/pages/speciality/ListSpeciality"
import { Login } from "@/pages/login/Login"

export default function App() {
    return (
        <div className="blur1">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>

                    <Route path="/service/add" element={<AddService />}></Route>
                    <Route path="/services" element={<ListService />}></Route>

                    <Route path="/package/add" element={<AddPackage />}></Route>
                    <Route path="/packages" element={<ListPackage />}></Route>

                    <Route path="/consult/add" element={<AddConsult />}></Route>

                    <Route path="/specialities" element={<ListSpeciality />}></Route>

                    <Route path="/pacient/add" element={<AddPacient />}></Route>
                    <Route path="/pacients" element={<ListPacient />}></Route>

                    <Route path="/medic/add" element={<AddMedic />}></Route>
                    <Route path="/medics" element={<ListMedic />}></Route>

                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}