import { Service } from "@/types/Service";

interface ServicesTableProps {
  services: Service[];
}

export const ServicesTable = ({ services }: ServicesTableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Descripción
            </th>
            <th scope="col" className="px-6 py-3">
              Codigo
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                {service.name}
              </th>
              <td className="px-6 py-4">{service.description}</td>
              <td className="px-6 py-4">{service.service_code}</td>
              <td className="px-6 py-4">${service.price}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Quitar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
