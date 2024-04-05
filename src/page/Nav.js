import {useNavigate} from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    const goReactQuery = () => {
        navigate('/reactQuery');
    };
    return (
        <ul>
            <li onClick={goHome}>Go Home</li>
            <li onClick={goReactQuery}>Go ReactQueryPage</li>
        </ul>
    );
};
export default Nav;
