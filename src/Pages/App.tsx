import { useState } from 'react';
import Form from '../Components/Form/Index';
import List from '../Components/List/Index';
import StopWatch from '../Components/StopWatch/Index';
import { MyApp } from './style';
import { ITask } from '../Types/Task';
import { defaultContextValue } from '../Context/Context';

import MyContext from '../Context/Context';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../Components/Form/style';


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

  const finishTask = () =>{
    if(selectedTask) {
        setTaskList(list => list.map(item=>{
          if(item.selected){
            return {...item, selected:false, completed:true}
          }
          else{
            return item
          }
        }))
    }

  }

  return (
    <MyContext.Provider value={defaultContextValue}>
      <ThemeProvider theme={DarkTheme}>
        <MyApp> 
          <Form setTaskList={setTaskList}/>
          <List 
            taskList={taskList}
            selectTask={selectTask}
          />
          <StopWatch selectedTask={selectedTask} finishTask={finishTask}/>
        </MyApp>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
