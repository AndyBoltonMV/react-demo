function Item({ title, desc, image }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={image} alt={desc} />
    </>
  );
}

export default Item;
