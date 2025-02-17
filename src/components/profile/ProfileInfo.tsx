import { Doctor } from "@/types/Doctor";
import { useEffect, useState } from "react";
import { WorkingHours } from "../WorkingHours/WorkingHours";
import { WorkingHour } from "@/types/WorkingHour";
import { Service } from "@/types/Service";
import { ServicesTable } from "../tables/ServicesTable";
import { Patient } from "@/types/Patient";
import { useParams } from "react-router-dom";
import { Admin } from "@/types/Admin";
import { axiosInstance } from "@/api/axiosInstance";
import { User } from "@/types/User";


//Ejemplo WorkingHours
const workingHours: WorkingHour[] = [
  { id: 1, day_of_week: "MONDAY", time_from: "09:00", time_to: "17:00" },
  { id: 2, day_of_week: "TUESDAY", time_from: "10:00", time_to: "18:00" },
  { id: 3, day_of_week: "MONDAY", time_from: "18:00", time_to: "20:00" },
];

//Ejemplo servicios
const services: Service[] = [
  {
    id: 1,
    name: "Consulta Pediatria",
    description: "Consulta pediatrica",
    service_code: "CPED",
    price: 18000.0,
  },
  {
    id: 2,
    name: "Consulta Odontologica",
    description: "Consulta Odontologica",
    service_code: "COD",
    price: 25000.0,
  },
];

