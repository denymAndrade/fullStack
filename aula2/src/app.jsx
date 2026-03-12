/*import Footer from "./components/Footer";
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
export default App;*/
import "./app.css";
import Logo from "./img/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BemVindo from "./components/BemVindo";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";

function App() {
  const habits = [
    { id: 1, titulo: "Exercício", meta: 5, ativo: true, diasFeitos: 5 },
    { id: 2, titulo: "Leitura", meta: 7, ativo: true, diasFeitos: 3 },
    { id: 3, titulo: "Meditação", meta: 7, ativo: false, diasFeitos: 0 },
    { id: 4, titulo: "Hidratação", meta: 7, ativo: true, diasFeitos: 6 },
  ];

  return (
    <div>
      <Header />

      <img src={Logo} alt="Logo do Projeto" style={{ width: "300px" }} />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList habits={habits} />
      </SecaoHabitos>
      <Footer />
    </div>
  );
}

export default App;
