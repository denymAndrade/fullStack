import HabitCard from "./HabitCard";
import { useState } from "react";

/* function HabitList({ habits }) {
  // Guard clause 1: protege contra undefined ou null
  if (!habits) return null;

  // Guard clause 2: mensagem amigável para lista vazia
  if (habits.length === 0) {
    return <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>;
  }

  return (
    <ul>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          titulo={habit.titulo}
          meta={habit.meta}
          ativo={habit.ativo}
          diasFeitos={habit.diasFeitos}
        />
      ))}
    </ul>
  );
}*/
function HabitList() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      titulo: "Beber 2L de água",
      descricao: "Ao longo do dia",
      categoria: "Saúde",
    },
    {
      id: 2,
      titulo: "Ler 20 minutos",
      descricao: "Livro ou artigo",
      categoria: "Estudo",
    },
    {
      id: 3,
      titulo: "Caminhar 30 minutos",
      descricao: "Depois do trabalho",
      categoria: "Exercício",
    },
  ]);

  const removerHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <section>
      <h2>Hábitos cadastrados</h2>
      {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}

      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          titulo={habit.titulo}
          descricao={habit.descricao}
          categoria={habit.categoria}
          onRemover={() => removerHabit(habit.id)}
        />
      ))}
    </section>
  );
}

export default HabitList;
