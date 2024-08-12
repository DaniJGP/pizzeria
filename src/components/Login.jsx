import { useState } from 'react';

const Login = () => {
    // Mensajes de información y error
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    // Campos del formulario de login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validarIngreso = () => {
        setMsg('');
        setError('');

        if (!email) {
            setError('Ingrese su correo electrónico');
            return 1;
        }

        if (!password) {
            setError('Ingrese su contraseña');
            return 1;
        }

        if (password.length < 6) {
            setError('La contraseña debe contener 6 caracteres como mínimo');
            return 1;
        }

        setMsg('Ha ingresado correctamente');

        setError('');
        setEmail('');
        setPassword('');
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputPassword').value = '';
        return 0;
    };
    return (
        <>
            <main className="formMain py-5">
                <h1>Ingresa</h1>
                <form className="form mx-auto">
                    <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="inputEmail">
                            Email:
                        </label>
                        <input
                            name="email"
                            className="form-control"
                            type="email"
                            placeholder="nombre@ejemplo.com"
                            id="inputEmail"
                            onChange={(evt) => setEmail(evt.target.value)}
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="inputPassword">
                            Contraseña:
                        </label>
                        <input
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Ingrese contraseña"
                            id="inputPassword"
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                    </div>
                    {error ? <p className="text-danger fw-bold rounded p-2 mb-4">{error}</p> : null}
                    {msg ? <p className="text-success fw-bold rounded p-2 mb-4">{msg}</p> : null}
                    <button
                        className="btn btn-success fs-6"
                        type="button"
                        onClick={() => validarIngreso()}
                    >
                        Ingresar
                    </button>
                </form>
            </main>
        </>
    );
};
export default Login;
