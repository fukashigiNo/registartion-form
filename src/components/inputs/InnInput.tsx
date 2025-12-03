import React from "react";
import { useInnContext } from "../../context/innContext";
import { UseErrorContext } from "../../context/errorContext";

type InnError = {
    inn?: string
}

export const InnInput = () => {
    const { inn, setInn } = useInnContext()
    const { error, setError } = UseErrorContext()

    const innValidate = (value: string): InnError => {
        const errors: InnError = {}

        if (!value.trim()) {
            errors.inn = 'ИНН обязателен'
        } else if (!/^\d{10}$|^\d{12}$/.test(value)) {
            errors.inn = 'ИНН должен содержать 10 или 12 цифр'
        }

        return errors
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setInn(value)

        const innError = innValidate(value)

        setError((prevError: any) => ({
            ...prevError,
            inn: innError.inn  // Явно устанавливаем inn (или undefined)
        }))
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">ИНН</label>
            <input
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 transition ${
                    error?.inn ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                type="text"
                placeholder="10 или 12 цифр"
                value={inn}
                onChange={onChange}
            />
            {error?.inn && <p className="text-red-500 text-sm mt-1">{error.inn}</p>}
        </div>
    )
}