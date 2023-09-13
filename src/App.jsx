import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <div className="my-8 text-center font-mono">
        &copy; 2023 Copyright: Developer By{" "}
        <span className="text-gray-500 font-extrabold">@itzmenajmul</span>
      </div>
    </div>
  );
}

export default App;
