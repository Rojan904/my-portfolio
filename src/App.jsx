import TestFramer from "./TestFramer";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      {/* <section><TestFramer/></section> */}
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section id="About">About</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
