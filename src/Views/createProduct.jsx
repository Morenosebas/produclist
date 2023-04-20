import { useContext, useState } from "react";
import { UserContext } from "../Context/userContext";
import { Navigate } from "react-router-dom";
import { saveStorage } from "../Context/userContext";
import "../Styles/createProduct.css";

export function CreateProduct() {
    const { user, setUser } = useContext(UserContext);
    const [created, setCreated] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const elements = e.target;
        const data = {
            name: elements.name.value,
            description: elements.description.value,
            qty: elements.quantity.value,
            id: user?.products.length,
            date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            img: imagePreview,
        }
        setUser({ ...user, products: [...user.products, data] })
        saveStorage({ ...user, products: [...user.products, data] })
        setTimeout(() => { setCreated(true) }, 300)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
        }
    };

    if (created) return <Navigate to='/products' />
    return (
        <div className="mainBody">
            <main style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "2rem",
            }}>
                <h2 style={{maxHeight:"10px", marginBottom:"1.5rem"}}>Crea un producto {user.username}</h2>
                <section className="containerFormProduct rounded bg-light">
                    <form action="POST"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "70%",
                            gap: "5px",
                            color: "#000",
                        }}
                        onSubmit={onSubmit}
                    >
                        <label htmlFor="name" >Nombre:</label>
                        <input className="input"   maxLength={15} placeholder="maximo 15 caracteres" id="name" name="name" required type="text" />
                        <label htmlFor="description">Descripcion:</label>
                        <textarea className="input" maxLength={100} placeholder="maximo 100 caracteres" name="description" id="description" required />
                        <label htmlFor="quantity" >Cantidad:</label>
                        <input  className="input"  name="quantity" id="quantity" type="number" required />
                        <label htmlFor="image">Imagen:</label>
                        <input name="image" id="image" type="file" accept=" img/png img/jpg img/webp" onChange={handleImageChange} required />
                        {imagePreview && <img src={imagePreview} alt="Imagen previa" style={{ maxWidth: "300px", height: "100%" }} />}
                        <button className="btn btn-dark">Crear Producto</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
