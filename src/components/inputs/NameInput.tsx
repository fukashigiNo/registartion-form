import { useNameContext } from "../../context/nameContext";
import { UseErrorContext } from "../../context/errorContext";

type NameError = {
    name?: string;
}




export const NameInput = () => {
    const { name, setName } = useNameContext(); 
    const { error, setError } = UseErrorContext();

    const nameValidate = (value: string) => {
        const errors: NameError= {}

        if (!value.trim()) { 
            errors.name = 'Имя обязательно' 
        } else if (!/^[A-Za-zА-Яа-яЁё\s-]{2,}$/.test(value.trim())) { 
            errors.name = 'Имя должно содержать только буквы, минимум 2 символа' 
        } 
        return errors
    }

 
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);


  

    const nameError  = nameValidate(value);

    setError((prevError: any) => ({
        ...prevError,
        name: nameError.name
    }))
  };

    return (
        <div className="">
            <input 
                className={`w-full px-3 py-2  border rounded focus:outline-none focus:ring-2 transition ${
                    error?.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                value={name}
                type="text"
                placeholder="Enter your name"
                onChange={onChange}
            />

            {error?.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
        </div>
    )
}