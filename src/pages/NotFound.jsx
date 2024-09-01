import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <main className="vh-100-navfooter d-flex flex-column justify-content-center align-items-center">
                <div className="">
                    <p className="text-secondary notfound-icon">
                        <i class="fa-regular fa-face-tired fa-xl"></i>
                    </p>
                    <p className="display-2 text-secondary">Error 404</p>
                    <h1>Página no encontrada</h1>
                    <p className='mb-5 fs-5'>La página que buscas no se encuentra en nuestro servidor</p>
                    <Link to="/" className="btn btn-outline-primary border-0 fs-5">Volver al home</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default NotFound;
