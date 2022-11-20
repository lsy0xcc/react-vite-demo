// import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function MainMenu() {
  // const navigate = useNavigate();

  // const onMenuSelect = ({ ...args }) => {
  //   switch (args.key) {
  //     case 'playground':
  //       navigate('/playground');
  //       break;
  //     case 'about':
  //       navigate('/about');
  //       break;
  //     default:
  //       navigate('/');
  //       break;
  //   }
  // };

  return (
    <div>
      <ul>
        <li>
          <Link to="/playground">playground</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
