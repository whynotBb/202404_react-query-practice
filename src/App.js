import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './page/HomePage';
import ReactQueryPage from './page/ReactQueryPage';
import Nav from './page/Nav';

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/reactQuery' element={<ReactQueryPage />} />
            </Routes>
        </div>
    );
}

export default App;
