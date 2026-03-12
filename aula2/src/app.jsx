import Footer from "./components/Footer";
import Logo from "./img/logo.png";
import "./app.css";
import Header from "./components/Header";
import BemVindo from "./components/BemVindo";
function App() {
  return (
    <div>
      <img src={Logo} alt="Logo do Projeto" style={{ width: "300px;" }} />
      <Header
        titulo="My Daily Habits"
        descricao="Gerencie seus hábitos diários de forma simples e visual."
      />
      <BemVindo nomeUsuario={"Turma iteam"} totalHabitos={"12345"} />
      <Footer />
    </div>
  );
}
export default App;
