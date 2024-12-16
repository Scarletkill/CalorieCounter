import { useRef, useState } from "react";
import CustomFormField from "../Customfield/custom_form_field";
import "../../style/register.css";

const Register = () => {
    const [fullName, setFullName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("male")
    const handleRegister = (event) => {
        event.preventDefault()
        console.log("fullname = ", fullName, username, email, phoneNumber, password, confirmPassword, gender)
    }
    return (
        <form onSubmit={handleRegister}>
            <div id="register-box">
                <h1 id="title"><span id="re">Re</span>gistration</h1>
                <div className="row-field">
                    <CustomFormField label="Full Name" placeholder="Enter your full name" type="text" cName="fullname" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                    <CustomFormField label="Username" placeholder="Enter your username" type="text" cName="username" onChange={(e) => setUserName(e.target.value)} value={username} />
                </div>
                <div className="row-field">
                    <CustomFormField label="Email" placeholder="Enter your email" type="text" cName="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <CustomFormField label="Phone Number" placeholder="Enter strong Phone Number" type="text" value={phoneNumber} cName="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="row-field">
                    <CustomFormField label="Password" placeholder="Enter strong Password" type="text" value={password} cName="password" onChange={(e) => setPassword(e.target.value)} />
                    <CustomFormField label="Confirm Password" placeholder="Enter your Confirm Password" type="text" value={confirmPassword} cName="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="gender-field">
                    <p>Gender</p>
                    <div id="gender">
                        <div className="g">
                            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                            <label for="male">Male</label>
                        </div>
                        <div className="g">
                            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                            <label for="female">Female</label>
                        </div>
                        <div className="g">
                            <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
                            <label for="male">Other</label>
                        </div>
                    </div>
                </div>
                <div id="reg-button">
                    <input id="login-button" type="submit" value={"Register"} />
                </div>
            </div>
        </form>
    );
}
export default Register