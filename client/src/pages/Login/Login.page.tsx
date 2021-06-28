import React from "react";
import "./Login.page.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { environments } from "../../environments";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const loginUser = async (credencialts: any) => {
    const { data } = await axios.post(
      `${environments.backend_url}/api/auth/login`,
      credencialts
    );

    console.log(data);
  };

  return (
    <div className="login-page-container">
      <div className="left-container">
        <h1 className="form-title">Welcome to my App</h1>

        <p className="form-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          labore!
        </p>

        <form className="login-form" onSubmit={handleSubmit(loginUser)}>
          <div className="input-container">
            <input
              type="text"
              required
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            <div className="label-container">
              <span>Email</span>
            </div>
          </div>

          <div className="input-container">
            <input
              type="password"
              required
              {...register("password", {
                required: true,
              })}
            />
            <div className="label-container">
              <span>Password</span>
            </div>
          </div>

          <button type="submit" className="btn-login-user">
            Login
          </button>
        </form>
      </div>

      <div className="right-container">
        <h1 className="right-title">Make a dream</h1>
        <p className="right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sapiente dolorem est placeat illum, ea beatae ad consequatur eum non.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
