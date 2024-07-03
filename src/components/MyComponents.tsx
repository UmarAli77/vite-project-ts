interface MyComponent {
    name: string;
    age: number;
    isMarried: boolean;
    onSubmit: (m: string) => void;
}

function MyComponents(props: MyComponent): JSX.Element {
  return (
    <div>
        <h1>My name is {props.name}</h1>
        <h2>My age is {props.age}</h2>
        <h1>Am I married? {props.isMarried ? 'Yes' : 'No'}</h1>
        <button onClick={() => props.onSubmit('Submit succes')}></button>
    </div>
  );
}

export default MyComponents;
