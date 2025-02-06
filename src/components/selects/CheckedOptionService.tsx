interface OptionServiceProps {
    checkedService: boolean
    checkedPackage: boolean
    handleChecked: (value: number) => void
}

export function CheckedOptionService({checkedService, checkedPackage, handleChecked}: OptionServiceProps) {
    return (
        <div className="d-grid column-2 gap-10 width-100">
            <div className={`cardCheckBox ${checkedService ? "card-active" : ""}`}>
                <input
                    type="checkbox"
                    id="activate_combo_service"
                    name="activate_combo_service"
                    hidden
                    onClick={() => handleChecked(1)}>
                </input>
                <p>🐙 Servicios</p>
                <label className="checkbox" htmlFor="activate_combo_service">
                    {checkedService && <i className="ri-check-line"></i>}
                </label>
            </div>
            <div className={`cardCheckBox ${checkedPackage ? "card-active" : ""}`}>
                <input
                    type="checkbox"
                    id="activate_combo_package"
                    name="activate_combo_package"
                    hidden
                    onClick={() => handleChecked(2)}>
                </input>
                <p>🐋 Paquetes</p>
                <label className="checkbox" htmlFor="activate_combo_package">
                    {checkedPackage && <i className="ri-check-line"></i>}
                </label>
            </div>
        </div>
    )
}