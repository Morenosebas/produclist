import { Form as FormUser } from "../Components/form";


export function Session() {

    return (
        <main className="mainBody" >
            <h1 style={{margin:"15px"}}>Inicia Sesion</h1>
            <section  className="formContainer bg-light rounded">
                <FormUser />
            </section>
        </main>
    );
}
