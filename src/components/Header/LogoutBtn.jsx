import React from "react";
import { logout } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";

function LogoutBtn(width = "100px") {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => [dispatch(logout())]);
    navigate("/");
  };
  return (
    <button width={width} onClick={logoutHandler} className="text-white">
      Logout
    </button>
  );
}

export default LogoutBtn;
