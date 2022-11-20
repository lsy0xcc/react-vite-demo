import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <div>
      <p>About</p>
      <p>This page is protected by auth gurad</p>
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
}
