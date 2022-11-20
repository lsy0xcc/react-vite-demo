import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem('access_token', 'token');
    navigate('/about');
  };
  return (
    <div>
      Login
      <button type="button" onClick={login}>
        click to log in
      </button>
    </div>
  );
}
