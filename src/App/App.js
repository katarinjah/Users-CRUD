import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import { AllUsers } from '../entities/AllUsers/AllUsers';
import { SingleUser } from '../entities/SingleUser/SingleUser';
import { CreateUser} from '../entities/CreateUser/CreateUser';
import { EditUser} from '../entities/EditUser/EditUser';

function App() {
  return (
    <Routes>
      <Route path={'/users'} element={<AllUsers />} />
      <Route path={'/'} element={<Navigate replace to={'/users'} />} />
      <Route path={'/users/:id'} element={<SingleUser/>} />
      <Route path={'/create'} element={<CreateUser />} />
      <Route path={'/edit'} element={<EditUser />} />
    </Routes>
  );
}

export default App;
