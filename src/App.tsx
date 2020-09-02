import React from 'react';

// function App() {
//     return <div className="App">Hello React - TypeScript!</div>;
// }

type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

export default App;
