import { useAuth } from "@/context/AuthContext";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const [checked, setChecked] = useState(false)
    const {user, login, logout, refreshToken} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    // Form method
    const form_method = "POST"
    
    const handleLogin = async (e : React.FormEvent) => {
        e.preventDefault();
        try{
            await login(email, password);
            navigate("/");
        }catch(error){
            setError(`Credenciales incorrectas. Intentalo de nuevo. ${error}`);
        }
        
    }

    const hadleChecked = () => { setChecked((n) => !n) }

    return (
        <section className="container-login">
            <form
                name="form_login"
                aria-label="Form to sign in"
                onSubmit={handleLogin}>

                {/* Text info */}
                <div className="cont-brand">
                    <img src="/logo.svg" alt="Brand for this web site"></img>
                </div>
                <div className="cont-text">
                    <h1>Iniciar sesion</h1>
                    <h6>Ingrese sus credenciales para continuar</h6>
                </div>

                {/* Form group */}
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Ingrese su correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>

                {/* Form group */}
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Ingrese su contraseña"
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>

                {/* Form group */}
                <div className="form-group">
                    <label 
                        className="checkbox"
                        htmlFor="active_sesion">
                        {checked && <i className="ri-check-line"></i>}
                    </label>
                    <label>Mantener sesión iniciada</label>
                    <input
                        type="checkbox"
                        id="active_sesion"
                        name="active_sesion"
                        hidden
                        onClick={hadleChecked}>
                    </input>
                </div>

                {!isLoading ? <button type="submit" className="btn btn-ok width-100">
                    Iniciar sesión
                </button> : <span>Loading....</span>}
                
                {error && <p className="error-msg">{error}</p>}

                <h6>¿No tienes una cuenta?</h6>
            </form>
        </section>
    )
}