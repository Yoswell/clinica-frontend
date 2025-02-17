import { User } from "./User";

export interface Patient extends User {
    health_insurance: HealthInsurance;
}

interface HealthInsurance{
    name: string;
    plan: string;
    number: string;
}