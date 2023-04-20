import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";



export function ProductsList() {
    const products = useContext(UserContext)?.user.products;
    const Navigation = useNavigate();
    return <div className="mainBody">
        <main>
            <h1>Productos</h1>
            <div className=" btn btn-danger d-flex align-items-center justify-content-center mb-1 rounded"
                style={{
                    position: "relative",
                    zIndex: "1",
                    width: "50px",
                    height: "30px",
                }}
                onClick={() => Navigation("/products/create")}
            >
                volver
            </div>
            <section className="container scrollPers rounded bg-light p-3"
                style={{ maxHeight: "500px", overflowY: "scroll", overflowX: "hidden" }}
            >
                {products?.map((product) =>
                    <div key={product.id} className="card mb-3" style={{ maxWidth: "540px" }}>

                        <div className="row g-0">
                            <div className="col-md-4 justify-content-center align-items-center d-flex"  >
                                <img className="img-fluid rounded-start" src={product.img} alt={product.name} />
                            </div>
                            <div className="col-md-8 bg-dark justify-content-center align-items-center d-flex">
                                <div className="card-body bg-dark text-light rounded" style={{ minHeight: "100%" }}>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text scrollPers" style={{ overflow: "auto", maxHeight: "100px" }}>{product.description}</p>
                                    <div>
                                        <p className="text-success" style={{ fontSize: "10px" }}>id: {product.id}</p>
                                        <p className="text-success" style={{ fontSize: "10px" }}>stock: {product.qty}</p>
                                        <p className="text-success" style={{ fontSize: "10px" }}>Creado: {product.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    </div>
}