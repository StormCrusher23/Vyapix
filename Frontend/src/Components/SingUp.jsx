import { use, useState } from "react";
import "./components.css"

function SignUp() {
    const API = "API_URL";
    const [visibility, setVisiblity] = useState("password")
    const [formData, setFormData] = useState({
        gst: "",
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("User Data:", formData);

        try {
            const response = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Signup successful!");
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="box ">
            <h1 className="text-5xl pt-10 text-gray-700 text-center">Sign up</h1>
            <form action="" method="post" className="flex flex-col p-10" onSubmit={handleSubmit}>

                <label htmlFor="gst" className="text-gray-500">GST no.</label>
                <input type="text" name="gst" id="gstNo" required className="ip"
                    value={formData.gst}
                    onChange={handleChange}
                />

                <label htmlFor="Name" className="text-gray-500">Name</label>
                <input type="text" name="name" id="name" required className="ip"
                    value={formData.name}
                    onChange={handleChange} />

                <label htmlFor="email" className="text-gray-500">Email</label>
                <input type="email" name="email" id="email" required className="ip"
                    value={formData.email}
                    onChange={handleChange} />

                <label htmlFor="password" className="text-gray-500">password</label>
                <input type={visibility} name="password" id="password" required autoComplete="ture" className="ip"
                    value={formData.password}
                    onChange={handleChange} />
                <div >
                    <input
                        type="checkbox"
                        onChange={(e) => setVisiblity(e.target.checked ? "text" : "password")}
                        className="mr-1.5"
                    />  <p className="inline text-gray-500 ">show password</p>
                </div>
                <input type="submit" value="Sign up" className="btn mt-10" />
            </form>

        </div>
    )
}

export default SignUp;
