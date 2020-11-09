import { FormInput } from "./styles";

const Input = ({ label, type, name, value, onChange, placeholder, className }) => {    

    const fieldId = `id_${name}`;

    return (
        <div className={className}>
            <label htmlFor={fieldId}>
                {label}
                <FormInput 
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    />
            </label>
        </div>
    )
}

export default Input