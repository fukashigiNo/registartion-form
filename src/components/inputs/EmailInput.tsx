import React from "react";
import { useEmailContext } from "../../context/emailContext";
import { UseErrorContext } from "../../context/errorContext";

type EmailError = {
    email?: string
}

export const EmailInput = () => {
    const { email, setEmail } = useEmailContext()
    const { error, setError } = UseErrorContext()

    const emailValidate = (value: string): EmailError => {
        const errors: EmailError = {}

        if (!value.trim()) {
            errors.email = 'Email обязателен'
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            errors.email = 'Неверный формат email'
        }

        return errors
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(value)

        const emailErrors = emailValidate(value)
        
        setError((prevError: any) => ({
            ...prevError,
            email: emailErrors.email  // Явно устанавливаем email (или undefined)
        }))
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 transition ${
                    error?.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                type="email"
                value={email}
                onChange={onChange}
                placeholder="name@example.com"
            />
            {error?.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>
    )
}