import React from 'react';
import { useForm } from 'react-hook-form';

function AgregarProducto() {
  const { register, handleSubmit, errors } = useForm();
  
  
  const onSubmit = (data) => {
    // data contiene los valores del formulario cuando se envía
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Código:</label>
        <input type="text" name="codigo" ref={register} />
      </div>
      <div>
        <label>Serie:</label>
        <input type="text" name="serie" ref={register} />
      </div>
      <div>
        <label>Volumen:</label>
        <input type="text" name="volumen" ref={register} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea name="descripcion" ref={register}></textarea>
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number" name="cantidad" ref={register} />
      </div>
      <div>
        <label>Tipo:</label>
        <input type="text" name="tipo" ref={register} />
      </div>
      <div>
        <label>Fecha de Ingreso:</label>
        <input type="date" name="fechaIngreso" ref={register} />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default AgregarProducto;
