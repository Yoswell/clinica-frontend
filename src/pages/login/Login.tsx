import { useState } from "react"

export function Login() {
    const [checked, setChecked] = useState(false)
    
    // Form method
    const form_method = "POST"

    const hadleChecked = () => { setChecked((n) => !n) }
    
    return (
        <section className="container-login">
            <form
                method={form_method}
                name="form_login"
                aria-label="Form to sign in"
                onSubmit={(e) => e.preventDefault()}>

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
                        placeholder="Ingrese su correo electrónico">
                    </input>
                </div>

                {/* Form group */}
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Ingrese su contraseña">
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
                        onClick={() => hadleChecked()}>
                    </input>
                </div>


                <button className="btn btn-ok width-100">
                    Iniciar sesión
                </button>

                <h6>¿No tienes una cuenta?</h6>
            </form>
        </section>
    )
}