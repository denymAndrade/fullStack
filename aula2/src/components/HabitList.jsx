import HabitCard from "./HabitCard";
/*import { useState } from "react";*/
import { useState, useEffect } from "react";

function HabitList() {
  const [habits, setHabits] = useState([
    /* array do Passo 1 */
  ]);
  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("");

  const adicionarHabit = (event) => {
    event.preventDefault();

    if (!novoNome.trim()) {
      alert("Informe um nome para o hábito.");
      return;
    }

    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7, // padrão
      ativo: true, // padrão
      diasFeitos: 0, // padrão
      categoria: novaCategoria || "Geral",
    };

    setHabits([...habits, novoHabit]);

    // Limpar os campos após adicionar
    setNovoNome("");
    setNovaDescricao("");
    setNovaCategoria("");
  };
  (useEffect(() => {
    document.title = `My Daily Habits — ${habits.length} "hábito(s)`;
  }),
    [habits]);

  const removerHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito *
            <input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
          </label>
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
