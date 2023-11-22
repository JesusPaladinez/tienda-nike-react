import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const Login = () => {

    const [usuario, setUsuario] = useState('');

    const navegador = useNavigate();

    const handleChange = (e) => {
        const valor = e.target.value;
        setUsuario(valor);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(usuario);
        navegador('/perfil');
    }


    return (
        <FormComponent/>
    );
    
}

export default Login;