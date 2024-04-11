import './App.css';
import Ptth_ClassComp from './components/Ptth_ClassComp';
import Ptth_FuncDemo from './components/ptth_FuncDemo';
function App() {
  // Khai báo biến đối tượng 
  const users = {
    userName: "k22cnt4",
    password: "123456@",
    fistName: "Phạm Thị Thu",
    lastName: "Huyền"
  }

  // Khai báo đối tượng hàm 
  function formatName() {
    return <h2>Xin chào, {users.fistName} {users.lastName} </h2>
  }
  return (
    <div className='App'>
      {/* Biểu thức JSX */}
      <div>
        <p>FullName: {users.fistName} {users.lastName} </p>
        {formatName(users)}
      </div>
      {/* Sử dụng component */}
      <Ptth_FuncDemo/>
      <Ptth_FuncDemo userName="PTTH" fullName="Phạm Thị Thu Huyền" age="20"/>
      {/*Sử dụng class compnents*/}
      <div>
            <Ptth_ClassComp/>
          {/* Sử dụng class component */}
        <div>
          {/* Không sử dụng props */}
          <Ptth_ClassComp />
          {/* Sử dụng props */}
          <Ptth_ClassComp company="Fit-NTU-K22CNT5" course="ReactJS 1" />
          <Ptth_ClassComp company="Fit-NTU-K22CNT4" course="ReactJS" />
          <Ptth_ClassComp company="Fit-NTU-K22CNT6" course="ReactJS 2" />
        </div>
      </div>
    </div>

    
  );
}

export default App;
