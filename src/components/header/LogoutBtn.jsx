import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService
        .logout()
        .then(() => {
                window.location.reload();
                dispatch(logout())
            })
            .catch(() => console.log('Error: logout btn on header'));
    };
    return (
        <button
            className="inline-block px-6 py-2 duration-200 hover:bg-slate-800 hover:text-white rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
