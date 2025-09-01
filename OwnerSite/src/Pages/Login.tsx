import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../store/loadingState";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const setLoading = useSetRecoilState(loadingState);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/login`, userDetails);
      if (res.status != 200) return alert("Please enter valid creadentials");
      const token = res.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    navigate("/");
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="p-5 w-100 bg-slate-400/20 flex flex-col gap-4 rounded-md">
        <div>
          <h1 className="font-bold">Username</h1>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleOnchange}
            className="bg-slate-400/40 w-full rounded-md h-10 px-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Password</h1>
          <div className="flex items-center bg-slate-400/40 rounded-md pr-2">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={userDetails.password}
              onChange={handleOnchange}
              className=" w-full rounded-md outline-none h-10 px-2"
            />
            <div
              onClick={() => {
                setShowPass((pre) => !pre);
              }}
            >
              {showPass ? <EyeClosed /> : <Eye />}
            </div>
          </div>
        </div>
        <button
          className="bg-black text-white font-bold rounded-md w-fit px-5 py-2 mx-auto"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
