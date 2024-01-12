import { useState } from 'react';
import Form from '../Components/Form/Index';
import List from '../Components/List/Index';
import StopWatch from '../Components/StopWatch/Index';
import { MyApp } from './style';
import { ITask } from '../Types/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[] | []>([])

  return (
    <MyApp>
      <Form setTaskList={setTaskList}/>
      <List taskList={taskList}/>
      <StopWatch/>
    </MyApp>
  );
}

export default App;
