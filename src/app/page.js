"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!username.trim() || !password) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const validUsername = "Gitaa";
      const validPassword = "30012010";

      if (username.trim() === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("semoga suka ^^");
        setSuccessMsg("Login berhasil! Ditunggu yaa...");
        setTimeout(() => {
          router.push("/menu");
        }, 1500);
      } else {
        setErrorMsg("Username atau Password salah!");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <AuthGuard>
      <section className="login-section">
        <style dangerouslySetInnerHTML={{ __html: `
          .login-section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-image: url('/Assets/PinkBackground1.png');
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
            font-family: 'Nunito', sans-serif;
          }

          .form-box {
            position: relative;
            width: 400px;
            height: 500px;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            backdrop-filter: blur(15px);
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
          }

          .form-value {
            width: 100%;
            padding: 40px;
          }

          h2 {
            font-size: 2em;
            color: black;
            text-align: center;
            margin-bottom: 30px;
            font-weight: 800;
          }

          .inputbox {
            position: relative;
            margin: 30px 0;
            width: 100%;
            border-bottom: 2px solid black;
          }

          .inputbox label {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            color: black;
            font-size: 1em;
            transition: .5s;
            pointer-events: none;
          }

          .inputbox input:focus ~ label,
          .inputbox input:valid ~ label {
            top: -5px;
          }

          .inputbox input {
            width: 100%;
            height: 50px;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1em;
            padding: 0 35px 0 5px;
            color: black;
          }

          .forget {
            margin: -15px 0 15px;
            font-size: .9em;
            color: black;
            display: flex;
            justify-content: center;
          }

          .forget a {
            color: black;
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
          }

          .forget a:hover {
            text-decoration: underline;
          }

          .login-btn {
            width: 100%;
            height: 40px;
            border-radius: 40px;
            background: #fff;
            border: 1px solid skyblue;
            outline: none;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-top: 20px;
            color: black;
          }

          .login-btn:hover {
            background: #f0f0f0;
            transform: translateY(-2px);
          }

          .login-btn:active {
            transform: translateY(0);
          }

          .login-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
          }

          .message {
            font-size: 0.9em;
            text-align: center;
            margin-top: 15px;
            padding: 10px;
            border-radius: 5px;
          }

          .error-message {
            color: #ff6b6b;
            background: rgba(255, 107, 107, 0.1);
            border: 1px solid rgba(255, 107, 107, 0.3);
          }

          .success-message {
            color: #51cf66;
            background: rgba(81, 207, 102, 0.1);
            border: 1px solid rgba(81, 207, 102, 0.3);
          }

          .loading {
            opacity: 0.7;
          }

          @media (max-width: 480px) {
            .form-box {
              width: 90%;
              height: auto;
              padding: 20px;
            }
            .form-value {
              padding: 20px;
            }
            h2 {
              font-size: 1.5em;
            }
          }
        ` }} />

        <div className={`form-box ${loading ? "loading" : ""}`}>
          <div className="form-value">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <div className="inputbox">
                <input
                  type="text"
                  id="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="forget">
                <a onClick={() => window.location.href = "https://wa.me/6282114073679?text=apa passwordnya"}>
                  Butuh Password?
                </a>
              </div>
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Log in"}
              </button>

              {errorMsg && <div className="message error-message">{errorMsg}</div>}
              {successMsg && <div className="message success-message">{successMsg}</div>}
            </form>
          </div>
        </div>
      </section>
    </AuthGuard>
  );
}
