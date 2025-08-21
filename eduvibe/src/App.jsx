import './index.css'; 
import Homepage from './components/homepage';
import Header from './components/Header';
import PopularCourses from './components/PopularCourses';

function App() {
  return (
    <div>
      <Header />
      <Homepage/>
      <PopularCourses/>
    </div>
  );
}

export default App;
