import { WorkingHour } from "@/types/WorkingHour";

interface WorkingHoursProps {
  workingHours: WorkingHour[];
}

// Mapeo de nombres de días
const dayNames: Record<string, string> = {
  MONDAY: "Lunes",
  TUESDAY: "Martes",
  WEDNESDAY: "Miércoles",
  THURSDAY: "Jueves",
  FRIDAY: "Viernes",
  SATURDAY: "Sábado",
  SUNDAY: "Domingo",
};

const weekOrder: string[] = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];


export const WorkingHours = ({ workingHours }: WorkingHoursProps) => {
  
    const sortedWorkingHours = workingHours.sort((a, b) => {
        return weekOrder.indexOf(a.day_of_week) - weekOrder.indexOf(b.day_of_week);
    });

  return (
    <div className="mx-auto mt-10">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 rounded-2xl text-center">
            <th className="border border-gray-300 p-2  text-center w-3/7">Día</th>
            <th className="border border-gray-300 p-2  text-center w-3/7">Horario</th>
            <th className="border border-gray-300 p-2  text-center w-1/7">#</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(sortedWorkingHours).map((wh) => (
            <tr key={wh.day_of_week}>
              <td className="border border-gray-300 p-2 text-center">
                {dayNames[wh.day_of_week]}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {wh.time_from} - {wh.time_to}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
