import { useAuthUser, useAuthHeader } from 'react-auth-kit';
import GameCarousel from '../games/GameCarousel';
import '../../assets/css/carousel.css';
import Navbar from '../Navbar';
import { useFetchGames } from '../hooks/gamesHooks';

function MainPage() {
  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const { games } = useSelector((state) => state.games);


  return (
    <>
      <Navbar />
      <div className="main-page-container">
        <h1 className="main-title">Esport Gaming Center</h1>
        <GameCarousel games={games} />
      </div>
    </>
  );
}

export default MainPage;
