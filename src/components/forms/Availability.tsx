import { useEffect, useState } from "react";
import { DoctorCard } from "../cards/DoctorCard";

export interface TimeSlot {
  time: String;
  duration_in_minutes: number;
}

export interface AvailableDate {
  date: string;
  times: TimeSlot[];
}

export interface DoctorAvailability {
  doctor_id: number;
  doctor_name: string;
  doctor_speciality: string;
  image: string;
  available_slots: AvailableDate[];
}

export const Availability = ({ serviceId, token }) => {
  const [availabilities, setAvailabilities] = useState<DoctorAvailability[]>(
    []
  );

  const getFormattedDate = (daysToAdd = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchAvailability = async () => {
      let url =
        `http://localhost:8080/appointments/availability?serviceId=${serviceId}` +
        `&from=${getFormattedDate()}` +
        `&to=${getFormattedDate(5)}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setAvailabilities(data);
    };

    fetchAvailability();
  }, [serviceId]);

  const handleClick = (date, time, doctorId) => {
    console.log(doctorId);
    console.log(date);
    console.log(time);
  };

  return (
    <div>
      <h4>Turnos Disponibles:</h4>
      {availabilities.length > 0 ? (
        <div className="availabilities">
          {availabilities.map((doctor) => (
            <div>
              <DoctorCard
                key={doctor.doctor_id}
                doctor={doctor}
                onSelectSlot={handleClick}
              ></DoctorCard>
              <hr></hr>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4>No hay turnos disponibles..</h4>
        </div>
      )}
    </div>
  );
};
