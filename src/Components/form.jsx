import '../Styles/form.css';
import { UserContext, saveStorage } from '../Context/userContext';
import { useContext, useState, } from 'react';
import { Navigate } from 'react-router-dom';
export const Form = () => {
    const { setUser } = useContext(UserContext);
    const [onSubmit, setOnSubmit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.elements.name;
        setUser({ username: value, products: [] })
        saveStorage({ username: value, products: [] })
        setTimeout(() => { setOnSubmit(true) }, 300)
    }
    if (onSubmit) return <Navigate to='/products/create' />
    return (
        <form onSubmit={handleSubmit} method='POST' className='form'>
            <h6>Ingresa un nombre para tu sesion</h6>
            <label htmlFor="text">Nombre:</label>
            <input className='input' type="text" name="name" id="name" />
            <button className='btn btn-dark' type="submit">Iniciar Sesion</button>
        </form>
    );
}