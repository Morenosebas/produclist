import { NavLink } from "react-router-dom";
import "../Styles/nav.css";
import { UserContext } from "../Context/userContext";
import { useContext } from "react";
export const Navigator = () => {

    const { user } = useContext(UserContext);
    return <nav
        className="bg-light"
        style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <ul style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "17%",
            listStyle: "none",
            height: "100%",
            alignItems: "center",
            padding: 0,
            margin: 0
        }}>
            <li >{user.products.length > 0 ? <NavLink className="navLinks" style={{ textDecoration: "none" }} to="/products">Productos</NavLink> : <div style={{
                color: "red",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: " 600",
                padding: "0 1rem",
            }}>Productos</div>}</li>
            <li >{user.username.length > 0 ? <NavLink className="navLinks" style={{ textDecoration: "none" }} to="/products/create">Crear Productos</NavLink>
                : <div style={{
                    color: "red",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontWeight: " 600",
                    padding: "0 1rem",
                }}>Crear Productos</div>}
            </li>
            <li ><NavLink className="navLinks" style={{ textDecoration: "none" }} to="/">Otra sesion</NavLink></li>
        </ul>
    </nav >
}