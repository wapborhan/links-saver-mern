import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SIgnIn = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const googlelogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result?.user;
        console.log(user);
        const userData = {
          username: user?.email.split("@")[0],
          email: user?.email,
          name: user?.displayName,
          photoUrl: user?.photoURL,
          userType: "user",
        };

        axiosPublic
          .post(`/user`, userData)
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-between items-center w-full h-full">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#e9e9e9] rounded-2xl shadow-xl home">
        <div className="flex flex-row gap-3 pb-4 items-center justify-center">
          <Link to="/" className="text-center">
            <img src="/logo.png" alt="Logo" width="30" />
          </Link>
          <Link
            to="/"
            className="text-4xl font-bold text-[#fff]  my-auto text-center "
          >
            Links Saver
          </Link>
        </div>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>{" "}
          <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center">
            <button
              className="bg-[#3B9DF8] text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200"
              onClick={googlelogin}
            >
              <div className="py-2 px-2.5 rounded-l-md bg-white">
                <img
                  src="assets/google.png"
                  alt="google logo"
                  className="w-[23px]"
                />
              </div>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
