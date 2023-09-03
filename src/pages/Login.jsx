// import { Gradient } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

function Login() {
  const inputRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in</h1>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2743.jpg?w=1060&t=st=1685867856~exp=1685868456~hmac=0d7a9216da5add954922c5ac2e4623d3047effce6d69aa548751eeca169567c4)`
          }}
          className="w-full h-full bg-no-repeat bg-cover"
        >
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <div className="z-10  w-[100vw]  h-[100vh] flex items-center justify-center">
            <div className="w-[50%] bg-grey px-4">
              <div className="text-[24px] font-bold mt-2 ">SIGN IN</div>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  id="username"
                  ref={inputRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  placeholder="username"
                  className="border border-3 border-black p-1"
                ></input>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  placeholder="password"
                  className="border border-3 border-black p-1"
                ></input>
                <button className=" bg-green-200 w-[100px] hover:bg-white border border-black h-[32px]">
                  LOGIN
                </button>
                <h2 className="text-[16px] mt-2 underline text-blue-900 cursor-pointer">
                  DO NOT YOU REMEMBER THE PASSWORD?
                </h2>
                <h2 className=" underline text-blue-900 cursor-pointer">
                  CREATE A NEW ACCOUNT
                </h2>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;