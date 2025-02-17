import { Service } from "./Service";
import { User } from "./User";
import { WorkingHour } from "./WorkingHour";

export interface Doctor extends User {
    speciality: string,
    salary : number,
    workingHours: WorkingHour[],
    services: Service[];
}