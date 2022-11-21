import "./App.css";
import { Image, Icon, Label, KeyboardHandling } from "./Components";

const App = () => {
  const listArrayItems :string[] = [
    "First",
    "second",
    "Third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
  ];

  const information: {
    id: string;
    title: string;
    subtitle: string;
    src: string;
    alt: string;
    iconname: string;
  }[] = [
    {
      id: "1",
      title: "List Item Title",
      subtitle: "List Item Title subtitle",
      src: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">',
      alt: "First Image",
      iconname: "fa-regular fa-envelope",
    },
  ];
  return (
    <>
      {/* <Image src={information[0].src} alt={information[0].alt} />
      <div className="label">
        <Label text={information[0].title} isTitle={true} />
        <Label text={information[0].subtitle} isTitle={false} />
      </div>
      <Icon iconname={information[0].iconname} /> */}
      <KeyboardHandling listArrayItems = {listArrayItems}/>
    </>
  );
};

export default App;
