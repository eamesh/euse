import { useMatch } from 'react-router-dom';

export default function Matting() {
  const match = useMatch({
    path: '/dashboard',
    end: false,
  });

  console.log(!!match);

  return <div>matting</div>;
}
