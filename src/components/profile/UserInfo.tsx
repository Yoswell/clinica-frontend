import { User } from "@/types/User";
import { useState } from "react";

interface UserInfoProps {
  user: User | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center">
        <img
          className="size-30 rounded-full"
          src="/profile_img.png"
          alt="Rounded avatar"
        />
      </div>
      <div className="flex flex-col gap-3 overflow-visible">
        <span className="text-black">Nombre: {user?.name}</span>
        <span>Apellido: {user?.surname}</span>
        <span>DNI: {user?.dni}</span>
        <span>Email: {user?.email}</span>
        <span>Fecha de nac: {user?.birth_date}</span>
      </div>
    </div>
  );
};
