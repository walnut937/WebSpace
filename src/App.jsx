import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import authService from './appwrite/auth';
import { Footer, Header } from './components';
import { login, logout } from './store/authSlice';
import Loading from './components/Loading';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between body">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    ) : <Loading />;
}

export default App;
