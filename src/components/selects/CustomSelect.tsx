

interface CustomSelectProps{
    options: string[];
    value: string;
    onChange: (value : string) => void;
    label? : string;
    className? : string
}

export const CustomSelect = ({options, value, onChange, label, className} : CustomSelectProps) => {
    return(
        <div className={`select-container ${className}`}>
            {label && <label className="select-label">{label}</label>}
            <select
                className="select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="" disabled>Selecciona una opción</option>
                {options.map((option,index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )

}