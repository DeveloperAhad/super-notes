import './App.css';
import BackupRestore from './components/BackupRestore';
import Container from './components/Container';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
        <Sidebar/>
        <Container/>
        <BackupRestore/>
    </>
  );
}

export default App;
