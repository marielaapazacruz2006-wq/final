import Image from "next/image";

interface ExerciseCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ExerciseCard({
  title,
  description,
  image,
}: ExerciseCardProps) {
  return (
    <article className="cardWrapper">
      <span className="itemText">item</span>

      <div className="exerciseCard">
        <div className="imageBox">
          <Image
            src={image}
            alt={title}
            width={110}
            height={90}
            className="exerciseImage"
          />
        </div>

        <div className="exerciseInfo">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <span className="arrow">›</span>
      </div>
    </article>
  );
}