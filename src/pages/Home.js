import SideBar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="homePage">
      <div className="home">
        <div className="home_sidebar">
          <SideBar />
        </div>
        <div className="home_showcase"></div>
      </div>
    </div>
  );
};

export default Home;
