
import Sidebar from '../components/Sidebar/Sidebar'; 
import Feed from '../components/Feed/Feed';
import Widget from '../components/Novedades/widgets';

function Home() {
  return (
    <div >
      <Sidebar />
      
      <Feed />
     
      <Widget />
    </div>
    
  );
}

export default Home;