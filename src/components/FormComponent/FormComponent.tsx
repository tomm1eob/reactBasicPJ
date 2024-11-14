import React, { ChangeEvent, useState } from 'react';

export const FormComponent = () => {

    const [values, setValues] = useState({
        email: "",
        nombre: "",
        edad: 0,
    });

    const { email, nombre, edad } = values;

    const handleSubmitForm = () => {
        console.log({ email, nombre, edad });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div>
            <div>
                <h2>Formulario</h2>
            </div>
            <div>
                <input 
                    value={email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="example@example.com" 
                />

                <input 
                    value={nombre}
                    name="nombre"
                    onChange={handleChange}
                    type="text"
                    placeholder="Nombre" 
                />

                <input 
                    value={edad}
                    name="edad"
                    onChange={handleChange}
                    type="number"
                    placeholder="Edad" 
                />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
            </div>
        </div>
    );
};
