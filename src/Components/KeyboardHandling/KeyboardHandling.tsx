const list = ['FirstData', 'SecondData', 'ThirdData', 'ForthData'];

const List = () => {
  return (
    <div>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
      };

