import { axiosInstance } from "@/api/axiosInstance";
import { Patient } from "@/types/Patient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserInfo } from "./UserInfo";

export const PatientInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (!id) return;
    axiosInstance
      .get(`/patients/${id}`)
      .then((response) => {
        setPatient(response.data);
      })
      .catch((error) => {
        console.log("Ocurrio un error al traer los datos del doctor:", error);
      });
  }, [id]);

  return (
    <div className="flex flex-col gap-2">
      <UserInfo user={patient} />
      {patient && (
      <div className="flex flex-row justify-between">
        <span>Obra social: {patient.health_insurance.name}</span>
        <span>Plan: {patient.health_insurance.plan}</span>
        <span>Nº afiliado: {patient.health_insurance.number}</span>
      </div>)}
    </div>
  );
};
