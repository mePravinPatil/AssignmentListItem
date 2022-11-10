import "./App.css";
import { Image, Icon, Label } from "./Components";

const App = () => {
  const information: any = [
    {
      id: "1",
      title: "List Item Title",
      subtitle: "List Item Title subtitle",
      src: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">',
      alt: "First Image"
    },
  ];
  return (
    <>
      <Image src={information[0].src} alt={information[0].alt} />
      <Label title={information[0].title} subtitle={information[0].subtitle} />
      <Icon />
    </>
  );
}

export default App;
