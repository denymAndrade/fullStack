import "./app.css";
import Logo from "./img/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BemVindo from "./components/BemVindo";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";

function App() {
  return (
    <div>
      <Header />

      <img src={Logo} alt="Logo do Projeto" style={{ width: "300px" }} />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={0} />

      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList />
      </SecaoHabitos>
      <Footer />
    </div>
  );
}

export default App;
