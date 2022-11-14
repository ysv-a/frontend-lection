import {useId} from 'react'

export function FormField({name, label, value, onChange, type = 'text'}) {
    const id = useId()
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}

export function FormCheckbox({name, label, value, onChange}) {
    const id = useId()
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={value}
                onChange={(event) => onChange(event.target.checked)}
            />
        </div>
    )
}

export function FormSelect({name, label, options, onChange, value = ''}) {
    const id = useId()
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                name={name}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
