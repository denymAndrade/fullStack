import Footer from "./components/Footer";
import Logo from "./img/logo.png";
import "./app.css";
function App() {
  return (
    <div>
      <img src={Logo} alt="Logo do Projeto" style={{ width: "300px;" }} />
      <h1>My Daily Habits</h1>
      <p>Gerencie seus hábitos diários de forma simples e visual.</p>
      <Footer />
    </div>
  );
}
export default App;
