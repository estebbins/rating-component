import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Rating from './components/Rating.js'
import './App.css';

function App() {
    return (
        <Fragment>
            <p>Hola</p>
            <Routes>
                <Route path='/' element={
                    <Rating />
                }
            />
            </Routes>
        </Fragment>
    );
}

export default App;
