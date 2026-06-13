import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    title: "Puxada frontal",
    description: "3 séries x 12 repetições",
    image: "/images/puxada.jpg",
  },
  {
    title: "Remada curvada",
    description: "3 séries x 12 repetições",
    image: "/images/remada-curvada.jpg",
  },
  {
    title: "Remada unilateral",
    description: "3 séries x 12 repetições",
    image: "/images/remada-unilateral.jpg",
  },
  {
    title: "Levantamento terra",
    description: "3 séries x 12 repetições",
    image: "/images/levantamento-terra.jpg",
  },
];

export default function ExerciseList() {
  return (
    <section className="exerciseList">
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={index}
          title={exercise.title}
          description={exercise.description}
          image={exercise.image}
        />
      ))}
    </section>
  );
}