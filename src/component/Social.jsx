import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const { googleUser } = useAuth();
  const navigate = useNavigate()

  const handleSocialLink = (media) => {
    media()
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button onClick={()=> handleSocialLink(googleUser)}
        className="flex select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      >
        <FcGoogle className="text-2xl"></FcGoogle>
        Continue with Google
      </button>
    </div>
  );
};

export default Social;
