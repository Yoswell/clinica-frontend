import { useState } from "react";
import { Availability } from "./Availability";

export const AppointmentForm = () => {
  const [type, setType] = useState("");
  const [selection, setSelection] = useState("");
  const types = ["Servicio", "Paquete"];
  const [itemsList, setItemsList] = useState([]);

  const handleSelection = (type) => {
    setType(type);
    fetchData(type);
  };

  const token = localStorage.getItem("token");

  const fetchData = async (type) => {
    try {
      let url = `http://localhost:8080/${
        type === "Paquete" ? "packages" : "services"
      }`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Error en la solicitud");

      const data = await response.json();
      const mappedData =
        type === "Paquete"
          ? data.map((packageItem) => ({
              label: `${packageItem.package_code} (${packageItem.services
                .map((service) => service.name)
                .join(", ")})`,
              value: packageItem.id,
            }))
          : data.map((service) => ({
              label: service.name,
              value: service.id,
            }));
      setItemsList(mappedData);
    } catch (error) {
      console.log("Error fetch data: ", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <label className="text-xl font-bold mb-4">
        Hola nombre_usuario, ¿Cómo te podemos ayudar?
      </label>

      <div className="form-group">
        <label className="font-semibold mb-2">
          ¿Para qué estás buscando un turno?
        </label>
        <div className="btn-align ">
          {types.map((option) => (
            <button
              key={option}
              className={`btn btn-ok p-2 rounded-md bg-orange-500 text-white`}
              onClick={() => handleSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {type && (
        <div className="step">
          <div className="form-group select-a">
            <label className="select-label">Selecciona un {type}</label>
            <select
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {itemsList.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <div className="mt-4 flex justify-between"></div>
          </div>
        </div>
      )}

      {type === "Servicio" && selection && (
        <Availability serviceId={selection} token={token}></Availability>
      )}
    </div>
  );
};
