import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();

    const {
      register, 
      formState: {errors},
      handleSubmit
      }=useForm ();
  
    const clickBotonIniciar = handleSubmit((data) => {
      console.log(data);

    
    navigate('/home');
  
    });

      
  
    return (
      <form onSubmit={clickBotonIniciar} className="containerForm container d-flex justify-content-center align-items-center">
        <div className="col-4 mt-5 card p-4 shadow m-auto">
          <h1 className="text-center mb-4">Iniciar sesión</h1>
          <label htmlFor="txtUser">Usuario</label>
          <input
            className="form-control shadow-sm"
            type="text"
            placeholder="Usuario"
            id="txtUser"
            name="txtUser"
            {...register ("userName",{
              required:
              {value: true, 
                message:'Ingrese el usuario.'},
              minLength:
              {value:2,
                message: 'El usuario debe tener como minimo 2 caracteres.'},
                maxLength:
                {value:20,
                  message: 'El usuario debe tener como máximo 20 caracteres.'}
            })}
          />
          {
            errors.userName && (
            <span className="messageDanger">{errors.userName.message}</span>
            )
          }

          <label htmlFor="txtPass" className="mt-4">
            Contraseña
          </label>
          <input
            className="form-control mb-4 shadow-sm"
            type="password"
            placeholder="Contraseña"
            id="txtPass"
            name="txtPass"
            {...register ("password",{
              required:
              {value:true,
                message:'Ingrese una contraseña.'},
              minLength:
              {value: 5, 
                message:'La contraseña debe tener como mínimo 5 caracteres.'},
              maxLength:
              {value: 20, 
                message:'La contraseña debe tener como máximo 20 caracteres.'}
            })}
          />
            {
            errors.password && (                                
            <span className="messageDanger">{errors.password.message}</span>
            )
          }
  
          <button className="btn btn-warning">Aceptar</button>
        </div>
      </form>
    );
  };
  
  export default FormComponent;