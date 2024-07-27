import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  }

  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-52"
      />
      {user && (
        <div className="flex p-2 items-center gap-2">
          <img
            src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTUt_eoZzVgxEMYWvJluilut_GefunFP0_QvsW5ONUYpCtwY9Zky4_FSTLRErnE4u2U9sClypkf2xjw-seYVsiTs6CKdG00.png?r=a8d"
            alt="usericon"
            className="w-12 h-12 rounded-lg"
          />
          <button
            onClick={handleSignOut}
            className="hover:underline font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
