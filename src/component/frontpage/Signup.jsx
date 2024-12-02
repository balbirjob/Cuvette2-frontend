import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import "../../component/../style/singup.css"
import logo from "../../assets/frontpage/LOGO 1.png";
import art from "../../assets/frontpage/Art.png";
//import { useAuth } from '../../store/auth';








function Signup() {


    // taking data from register fields
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
    });


     // affter register move to login page
     const navigate = useNavigate();
     // for token
      // const {storeTokenInLS} = useAuth();




    //handling the input value
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;


        setUser({
            ...user,
            [name]: value,
        });
    }



    // form submit 
    const handleSubmit = async (e) => {
        e.preventDefault();



        //sending data to front end to backend
        try {
            const response = await fetch(`https://backend-mearn.onrender.com/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            // affter submition of form form should empty
            if (response.ok) {
                //............/.........

                //storeTokenInLS(res_data.token);

                setUser({ 
                    username: "",
                    email: "", 
                    phone: "", 
                    password: "",
                    });

                    navigate("/login");
                //for local storage
               // const res_data = await response.json();
               // console.log("res from server....", res_data.extraDetails);
                //storeTokenInLS(res_data.token);

                //............/.........
                
            

            // } else {
            //     alert("invalid input.....");
            }
            console.log(response)



        } catch (error) {
            console.log("register", error);

        }


    };







    return (
        <>
            <div className="container-main">
                <div className="first-part">
                    <div>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="first-heading">
                            <h2>Welcome  👋</h2>
                            <p>
                                Today is a new day. It's your day. You shape it.
                                <br />
                                Sign in to start ordering.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="first-form">
                                <label>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="username"
                                    placeholder="e.g.John A"
                                    required
                                    value={user.username}
                                    onChange={handleInput}


                                />
                            </div>
                            <div className="first-form">
                                <label>Phone</label>
                                <input type="number"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your 10 digit mobile number"
                                   
                                    value={user.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className="first-form">
                                <label>Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}

                                    placeholder="Example@email.com"
                                    required
                                />

                            </div>
                            <div className="first-form">
                                <label>Password</label>
                                <input type="password"
                                    id="password"
                                    placeholder="At least 8 characters"
                                    required
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
                                />

                            </div>
                            <button type="submit" className="sign-in-button"> Continue</button>

                        </form>
                        <div className="signup-text">
                            <p>
                                Don't you have an account? <Link to="/login">SignIn</Link>
                            </p>
                        </div>

                    </div>
                </div>



                <div className="second-part">
                    <img src={art} alt="art" width={700} height={700} />
                </div>
            </div>

            {/* <Footer/> */}


        </>
    )
}

export default Signup
