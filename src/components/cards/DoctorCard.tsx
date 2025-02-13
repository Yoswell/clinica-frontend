import { Image } from "@chakra-ui/react";
import { DoctorAvailability } from "../forms/Availability";

interface DoctorCardProps {
  doctor: DoctorAvailability;
  onSelectSlot: (doctorId: number, date: string, time: string) => void;
}



export const DoctorCard = ({ doctor, onSelectSlot }: DoctorCardProps) => {

    const formattedDate = (date) => {
        let formattedDate = new Date(date);
        return formattedDate.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }


  return (
    <div className="doctor-card">
      <div className="doctor-card-profile-data">
        <Image
          src={doctor.image ? doctor.image : "https://bit.ly/naruto-sage"}
          alt={doctor.doctor_name}
          fit="cover"
          boxSize="60px"
          borderRadius="full"
        />
        <div className="info">
          <h3>{doctor.doctor_name}</h3>
          <p>{doctor.doctor_speciality}</p>
        </div>
      </div>
      {doctor.available_slots.map((slot) => (
        <div key={slot.date}>
          <h4>{formattedDate(slot.date)}</h4>
          <div className="btn-align">
            {slot.times.map((time) => (
              <button
                key={time.time.toString()}
                className="btn btn-ok"
                onClick={() =>
                  onSelectSlot(
                    doctor.doctor_id,
                    slot.date,
                    time.time.toString()
                  )
                }
              >
                {time.time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
