import { Doctor } from "@/types/Doctor";
import { WorkingHours } from "../WorkingHours/WorkingHours";
import { ServicesTable } from "../tables/ServicesTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/api/axiosInstance";
import { UserInfo } from "./UserInfo";

export const DoctorInfo = () => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    axiosInstance
      .get(`/doctors/${id}`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.log("Ocurrio un error al traer los datos del doctor:", error);
      });
  }, [id]);

  return (
    <div>
      <UserInfo user={doctor} />
      <label className="text-2xl text-black">Dias laborales</label>
      {doctor?.workingHours && (
        <WorkingHours workingHours={doctor?.workingHours} />
      )}

      <label className="text-4xl font- text-black">Servicios</label>
      {doctor?.services && <ServicesTable services={doctor?.services} />}
    </div>
  );
};
