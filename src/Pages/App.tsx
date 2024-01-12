import { useState } from 'react';
import Form from '../Components/Form/Index';
import List from '../Components/List/Index';
import StopWatch from '../Components/StopWatch/Index';
import { MyApp } from './style';
import { ITask } from '../Types/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[] | []>([])
  const [selectedTask, setSelected] = useState<ITask>()

  const selectTask = (selectedTask : ITask) =>{
    setSelected(selectedTask);
    setTaskList(taskList => taskList.map(item => (
      {
      ...item,
      selected: item.id === selectedTask.id ? true : false
      }
    )))
  }

  return (
    <MyApp> 
      <Form setTaskList={setTaskList}/>
      <List 
        taskList={taskList}
        selectTask={selectTask}
      />
      <StopWatch selectedTask={selectedTask}/>
    </MyApp>
  );
}

export default App;
