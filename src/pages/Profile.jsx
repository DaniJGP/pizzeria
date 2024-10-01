import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Profile.css';

const Profile = () => {
    const imgSrc = 'src/assets/img/abstract-user-flat-4.png';
    const { user, getUser, logout } = useContext(UserContext);

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Navbar />
            <main className="vh-100-navfooter">
                <div className="container d-flex justify-content-center align-items-start p-5">
                    <div className="card max-w-md">
                        <div className="row card-body">
                            <div className="col-4">
                                <img src={imgSrc} alt="" className="card-img profile-img" />
                            </div>
                            <div className="col-8 text-start d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className="fs-3">Usuario</h2>
                                    <p className="fs-5">Email: {user.email}</p>
                                </div>
                                <button className="btn btn-danger align-self-end" onClick={logout}>
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Profile;
