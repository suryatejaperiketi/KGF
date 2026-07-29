import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../../assets/loginn.png";
import "../Styles/AdminLogin.css";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin({onClose}) {
  const navigate = useNavigate();

  /* === LOGIN STATES === */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState({ a: 2, b: 3 });
  const [userInput, setUserInput] = useState("");
  

  /* === FORGOT STATES === */
  const [showForgot, setShowForgot] = useState(false);
  const [step, setStep] = useState(1);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  /* === DUMMY CREDENTIALS === */
  const dummyEmail = "kgf@gmail.com";
  const dummyPass = "kgfadmin123";

  /* === LOGIN HANDLER === */
  const validateLogin = () => {
    const correctCaptcha = captcha.a + captcha.b;

    if (Number(userInput) !== correctCaptcha) {
      toast.error("Captcha incorrect!");
      return;
    }

    if (username === dummyEmail && password === dummyPass) {
      toast.success("Login successful! Welcome to Admin dashboard");
      setTimeout(() => navigate("/admindashboard"), 1000);
    } else {
      toast.error("Invalid Email or Password!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLogin();
  };

  /* === FORGOT STEP 1 === */
  const verifyEmail = (e) => {
    e.preventDefault();

    if (forgotEmail === dummyEmail) {
      const otpValue = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(otpValue);
      toast.success(`OTP sent: ${otpValue}`);
      setStep(2);
    } else {
      toast.error("Email not registered!");
    }
  };

  /* === FORGOT STEP 2 === */
  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      setStep(3);
    } else {
      toast.error("Invalid OTP!");
    }
  };

  /* === FORGOT STEP 3 === */
  const setPasswordHandler = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password changed successfully!");
    setShowForgot(false);
    setStep(1);
    setForgotEmail("");
    setOtp("");
    setGeneratedOtp("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="unique-login-wrapper">
        <div className="kgf-admin-login-close-btn">
          <button onClick={onClose}>X</button>
        </div>
        <div className="unique-login-card">
          <div className="row g-0">
            {/* LEFT IMAGE */}
            <div className="col-md-5 d-none d-md-block">
              <img
                src={loginimage}
                className="unique-login-image"
                alt="login-profile"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
              <div className="unique-login-body">
                <h3 className="unique-login-title text-center mb-3">
                  Admin LogIn
                </h3>

                {/* === LOGIN === */}
                {!showForgot && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label className="fw-semibold small-label">Email *</label>
                      <input
                        type="email"
                        className="form-control unique-login-input"
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="fw-semibold small-label">
                        Password *
                      </label>
                      <input
                        type="password"
                        className="form-control unique-login-input"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-end mb-3">
                      <p
                        className="unique-forget"
                        onClick={() => {
                          setShowForgot(true);
                          setStep(1);
                        }}
                      >
                        Forgot Password?
                      </p>
                    </div>

                    <div className="captcha-box-stu mb-3">
                      <span>
                        ↻ {captcha.a}+{captcha.b}=?
                      </span>
                      <input
                      className="admin-captcha"
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 mb-2 rounded-pill unique-btn1"
                    >
                      Sign In
                    </button>

                    <p className="text-center mb-2 fw-light small-label">
                      Or With
                    </p>

                    <button
                      type="button"
                      className="btn btn-outline-danger w-100 rounded-pill unique-btn2"
                    >
                      <FcGoogle className="me-2" />
                      Log in with Google
                    </button>
                  </form>
                )}

                {/* === FORGOT STEP 1 === */}
                {showForgot && step === 1 && (
                  <form onSubmit={verifyEmail}>
                    <h4 className="text-start mb-3">Registered Email</h4>

                    <input
                      type="email"
                      className="form-control unique-login-input mb-3"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      required
                    />

                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowForgot(false)}
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Send OTP
                      </button>
                    </div>
                  </form>
                )}

                {/* === FORGOT STEP 2 === */}
                {showForgot && step === 2 && (
                  <form onSubmit={verifyOtp}>
                    <h4 className="text-start mb-3">Enter OTP</h4>

                    <input
                      type="text"
                      className="form-control unique-login-input mb-3"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />

                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Verify
                      </button>
                    </div>
                  </form>
                )}

                {/* === FORGOT STEP 3 === */}
                {showForgot && step === 3 && (
                  <form onSubmit={setPasswordHandler}>
                    <h4 className="text-start mb-3">Set New Password</h4>

                    <input
                      type="password"
                      className="form-control unique-login-input mb-2"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />

                    <input
                      type="password"
                      className="form-control unique-login-input mb-3"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />

                    <button type="submit" className="btn btn-primary w-100">
                      Update Password
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
