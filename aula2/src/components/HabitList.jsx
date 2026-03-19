import HabitCard from "./HabitCard";
import { useState, useEffect, useRef, createContext } from "react";

export const HabitsContext = createContext(null);

function HabitList() {
  const [habits, setHabits] = useState(() => {
    const habitosSalvos = localStorage.getItem("meusHabitos");

    if (habitosSalvos) {
      return JSON.parse(habitosSalvos);
    }

    return [];
  });

  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("");
  const [novaMeta, setNovaMeta] = useState(7);
  const [erroNome, setErroNome] = useState("");
  const [erroMeta, setErroMeta] = useState("");

  const nomeInputRef = useRef(null);

  const adicionarHabit = (event) => {
    event.preventDefault();

    if (!novoNome.trim()) {
      alert("Informe um nome para o hábito.");
      return;
    }

    if (erroNome || erroMeta) {
      nomeInputRef.current?.focus();
      return;
    }

    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: Number(novaMeta),
      ativo: true,
      diasFeitos: 0,
      categoria: novaCategoria || "Geral",
    };

    setHabits((prev) => [...prev, novoHabit]);

    setNovoNome("");
    setNovaDescricao("");
    setNovaCategoria("");
    setNovaMeta(7);

    nomeInputRef.current?.focus();
  };

  const removerHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("meusHabitos", JSON.stringify(habits));

    document.title = `My Daily Habits — ${habits.length} hábito(s)`;
  }, [habits]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "novoNome") {
      setNovoNome(value);
      if (value.length > 0 && value.length < 3) {
        setErroNome("O nome deve ter pelo menos 3 caracteres.");
      } else {
        setErroNome("");
      }
    }
    if (name === "novaDescricao") setNovaDescricao(value);
    if (name === "novaCategoria") setNovaCategoria(value);
    if (name === "novaMeta") {
      const num = parseInt(value);
      setNovaMeta(value);
      if (num < 1 || num > 7) {
        setErroMeta("Meta deve ser entre 1 e 7 dias.");
      } else {
        setErroMeta("");
      }
    }
  };

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito *
            <input
              type="text"
              name="novoNome"
              value={novoNome}
              onChange={handleChange}
              ref={nomeInputRef}
            />
          </label>
          {erroNome && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: 0 }}>
              {erroNome}
            </p>
          )}
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              name="novaDescricao"
              value={novaDescricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              name="novaCategoria"
              value={novaCategoria}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Meta (dias por semana)
            <input
              type="number"
              name="novaMeta"
              value={novaMeta}
              onChange={handleChange}
            />
          </label>
          {erroMeta && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: 0 }}>
              {erroMeta}
            </p>
          )}
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        <div
          style={{ marginTop: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Você tem {habits.length} hábitos cadastrados!
        </div>

        {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default HabitList;
