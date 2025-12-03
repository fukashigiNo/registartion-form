import React  from "react";
import { NameInput } from "../inputs/NameInput";
import { EmailInput } from "../inputs/EmailInput";
import { PasswordInput } from "../inputs/PassordInput";
import { InnInput } from "../inputs/InnInput";
import { MyButton } from "../button/myButtons";
import { UseErrorContext } from "../../context/errorContext";
import { useEmailContext } from "../../context/emailContext";
import { useInnContext } from "../../context/innContext";
import { useNameContext } from "../../context/nameContext";
import { usePasswordContext } from "../../context/passwordContext";


export const AllInputs = () => {

    const { error } = UseErrorContext();
    const { name } = useNameContext();
    const { email } = useEmailContext();
    const { password } = usePasswordContext();
    const { inn } = useInnContext();

    const isFormValid = !error.name && !error.email && !error.password && !error.inn
                        && name.trim() !== '' && email.trim() !== '' && password !== '' && inn.trim() !== '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) {
            console.log("Форма содержит ошибки или не заполнена полностью.");
            return;
        }

        const formData = {
            name,
            email,
            password,
            inn
        };

        try {
            const response = await fetch('https://api.example.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            
            if (response.ok) {
                console.log("Регистрация прошла успешно!");
            } else {
                console.log("Ошибка при регистрации.");
            }

        } catch (error) {
            console.error("Ошибка сети:", error);
        }
    }

    return (
    <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="font-bold text-2xl text-center">Форма регистраций</label>
            <NameInput/>
            <EmailInput/>
            <PasswordInput/>
            <InnInput/>
            <MyButton isValid={isFormValid} />
        </form>
    </div>
    )
}