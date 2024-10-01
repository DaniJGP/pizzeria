import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
    // Mensaje de error
    const [error, setError] = useState('');

    // Campos del formulario de registro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    // Método de registro del UserContext
    const { register } = useContext(UserContext);

    const validarRegistro = (e) => {
        e.preventDefault();

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

        if (password !== password2) {
            setError('Las contraseñas no coinciden');
            return 1;
        }

        register(email, password);

        setError('');
        setEmail('');
        setPassword('');
        setPassword2('');
        return 0;
    };
    return (
        <>
            <Navbar />
            <main className="formMain py-5">
                <h1>Crear cuenta</h1>
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
                            value={email}
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
                            value={password}
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="inputPassword2">
                            Repita Contraseña:
                        </label>
                        <input
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Ingrese contraseña"
                            id="inputPassword2"
                            onChange={(evt) => setPassword2(evt.target.value)}
                            value={password2}
                        />
                    </div>

                    {error ? <p className="text-danger fw-bold rounded p-2 mb-4">{error}</p> : null}
                    <button
                        className="btn btn-success fs-6"
                        type="submit"
                        onClick={(e) => validarRegistro(e)}
                    >
                        Registrarse
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
};
export default Register;
