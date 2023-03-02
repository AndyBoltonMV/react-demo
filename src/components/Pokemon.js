export function Pokemon({ name, image }) {
  return (
    <div>
      <h2>{name}</h2>
      {image && <img src={image} alt={name + " sprite from pokemon games"} />}
    </div>
  );
}
