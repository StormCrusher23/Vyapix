import "./components.css";
function Login_btn(params) {
    return (
        <ul className="nav-links">
                <li className="text-sm md:text-base">About</li>
                <li className="text-sm md:text-base"> Features</li>
                <button className="btn mt-3 p-1 px-2.5 md:py-3 md:px-5 text-base md:text-xl "
                onClick={params.open} >Login</button>

            </ul>
    );
}
export default Login_btn;