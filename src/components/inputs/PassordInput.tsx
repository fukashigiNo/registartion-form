import { UseErrorContext } from "../../context/errorContext";
import { usePasswordContext } from "../../context/passwordContext";

type PasswordError = {
    password?: string;
}

export const PasswordInput = () => {
    const {password, setPassword} = usePasswordContext()
    const { error, setError } = UseErrorContext()

    const passwordValidate = (value:string) => {
        const errors: PasswordError = {}

        if (!value.trim) { 
         errors.password = 'Пароль обязателен' 
        } else if (value.length < 8) { 
         errors.password = 'Минимум 8 символов' 
        } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(value)) { 
        errors.password = 'Пароль должен содержать буквы и цифры' 
      } 
      return errors
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPassword (value);

        const passwordErrors = passwordValidate(value)

        setError(( prevError: any) => ({
            ...prevError,
            password: passwordErrors.password
        }))
    }
    
    return (
        <div>
         <input 
            type="password" 
            placeholder="Enter password"
            value={password}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 transition ${
                    error?.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
            onChange={onChange}
          />

          {error?.password && <p className="text-red-500 text-sm mt-1">{error.password}</p> }
        </div>
    )
}