import "./App.css";
import Item from "./components/Item";

function App() {
  const objects = [
    {
      id: 1,
      title: "Item 1",
      description: "This is item 1",
      image: "https://picsum.photos/id/1/200/200",
    },
    {
      id: 2,
      title: "Item 2",
      description: "This is item 2",
      image: "https://picsum.photos/id/2/200/200",
    },
    {
      id: 3,
      title: "Item 3",
      description: "This is item 3",
      image: "https://picsum.photos/id/3/200/200",
    },
  ];

  return (
    <div className="App">
      <h1>Andy's Ract Page</h1>
      <p>Here's more of Andy's Ract app</p>
      {objects.map((itemObj, index) => {
        return (
          <Item
            key={index}
            title={itemObj.title}
            desc={itemObj.description}
            image={itemObj.image}
          />
        );
      })}
    </div>
  );
}

export default App;
