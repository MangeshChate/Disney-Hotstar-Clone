
import Coursal from './components/Coursal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SmCoursol from './components/SmCoursol';
function App() {
  return (
   <>
    <Navbar/>
    <Coursal/>
    <SmCoursol heading={"Watch with your Family"}/>
    <SmCoursol heading={"popular Shows"}/>
    <SmCoursol heading={"New movies for you"}/>
    <SmCoursol heading={"New & Upcomeing"}/>
    <Footer/>



   </>
  );
}

export default App;
