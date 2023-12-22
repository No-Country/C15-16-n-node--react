
import Sidebar from '../components/Sidebar/Sidebar'; 
import Feed2 from '../components/Feed/Fedd2';
import Search from '../components/Search/Search';
import Header from '../components/barra_header/Header';
import Comment from '../components/Comment/Comment';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/Theme/Theme'; 





function Home() {
  return (
    <div >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <Search />  
      <Header />
      <Comment /> 
      <Feed2 />
    </ThemeProvider>

    </div>
    
  );
}

export default Home;