import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", "demo");
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return { login, logout };
}
