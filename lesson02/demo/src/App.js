// import logo from './logo.svg';
import './App.css';
import Func_JSX_phamthithuhuyen from './components/Func_JSX_phamthithuhuyen'; 
import Class_PhamThiThuHuyen from './components/Class_PhamThiThuHuyen';

function App() {
  return (
    <section className="App">
      <h1> demo JSX</h1>
      {/*function component demo*/}
      <Func_JSX_phamthithuhuyen />
      <Func_JSX_phamthithuhuyen fullname ="Pham Thi Thu Huyen " age ="20" />

      <Class_PhamThiThuHuyen/>
      <hr/> 
      <Class_PhamThiThuHuyen info= "hoc reactJS" time="11"/>
      

    </section>
  );
}

export default App;
