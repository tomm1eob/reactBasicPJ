import React, { ChangeEvent, useState } from 'react'; // Importa React, el hook useState y el tipo ChangeEvent.

export const FormComponent = () => { // Define el componente FormComponent.

    const [values, setValues] = useState({ // Define el estado values para almacenar los datos del formulario.
        email: "",
        nombre: "",
        edad: 0,
    });

    const { email, nombre, edad } = values; // Desestructura el estado para acceder a los valores individualmente.

    const handleSubmitForm = () => { // Función que imprime los valores del formulario en consola al enviar.
        console.log({ email, nombre, edad });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { // Función que actualiza el estado al cambiar un input.
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value, // Actualiza solo el campo correspondiente en el estado.
        });
    };

    return (
        <div>
            <div>
                <h2>Formulario</h2> {/* Título del formulario */}
            </div>
            <div>
                <input 
                    value={email} // Asigna el valor de email al input.
                    name="email" // Nombre del input para identificarlo en handleChange.
                    onChange={handleChange} // Maneja los cambios en el input.
                    type="email" // Tipo de input.
                    placeholder="example@example.com" // Texto de marcador de posición.
                />

                <input 
                    value={nombre} // Asigna el valor de nombre al input.
                    name="nombre" // Nombre del input.
                    onChange={handleChange} // Maneja los cambios en el input.
                    type="text" // Tipo de input.
                    placeholder="Nombre" // Texto de marcador de posición.
                />

                <input 
                    value={edad} // Asigna el valor de edad al input.
                    name="edad" // Nombre del input.
                    onChange={handleChange} // Maneja los cambios en el input.
                    type="number" // Tipo de input.
                    placeholder="Edad" // Texto de marcador de posición.
                />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar</button> {/* Botón que llama a handleSubmitForm al hacer clic */}
            </div>
        </div>
    );
};
