import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import logo from "../../assets/frontpage/LOGO 1.png";
import art from "../../assets/frontpage/Art.png";
import "../../component/../style/login.css"
import { useAuth } from '../../store/auth';




const Login = () => {

    // taking data from register fields
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    

    //after login is succesfull then move to home page
    const navigate = useNavigate();


    // for token
    const {storeTokenInLS} = useAuth();


   
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
         
           try {
                const response = await fetch(`https://backend-mearn.onrender.com/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

              console.log("Loginform",response)

             if(response.ok){
                alert("Login Successful")


                //storeTokenInLS(res_data.token);
                setUser({email:"", password:""});
                navigate("/home");

             }else{
                 alert("invalid credential");
                console.log("invalid email and password")
             }



            
           } catch (error) {
            console.log(error)
            
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
                            <h2>Welcome Back 👋</h2>
                            <p>
                                Today is a new day. It's your day. You shape it.
                                <br />
                                Sign in to start ordering.
                            </p>
                        </div>

                        <form  onSubmit={handleSubmit}>
                            <div className="first-form">
                                <label>Email</label>
                                <input type="email" 
                                    id="email" 
                                     name="email"
                                    placeholder="Example@email.com" 
                                    value={user.email}
                                    onChange={handleInput}
                                    
                                    required />

                            </div>
                            <div className="first-form">
                                <label>Password</label>
                                <input type="password" 
                                     id="password" 
                                     name="password" 
                                     value={user.password}
                                     onChange={handleInput}
                                     placeholder="At least 8 characters" 
                                     required 
                                     />

                            </div>
                            <button type="submit" className="sign-in-button"> Sign in</button>

                        </form>
                        <div className="signup-text">
                            <p>
                              Don't you have an account? <Link to="/">SignUp</Link>
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

export default Login