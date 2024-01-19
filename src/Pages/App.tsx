import { useState } from 'react';
import Form from '../Components/Form/Index';
import List from '../Components/List/Index';
import StopWatch from '../Components/StopWatch/Index';
import { MyApp, MyBody } from './style';
import { ITask } from '../Types/Task';

import MyContext from '../Context/Context';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../Context/Theme';
import Aside from '../Components/Aside/Index';



function App() {
  const [taskList, setTaskList] = useState<ITask[] | []>([])
  const [selectedTask, setSelected] = useState<ITask | undefined>()
  
  const [theme, toggleTheme] = useState<string>('light')

  const selectTask = (selectedTask : ITask) =>{
    setSelected(selectedTask);
    setTaskList(taskList => taskList.map(item => (
      {
      ...item,
      selected: item.id === selectedTask.id ? true : false
      }
    )))
  }

  const defaultContextValue = {
      taskList: taskList,
      setTaskList: setTaskList,
      selectedTask: selectedTask,
      setSelected: setSelected,
      theme: theme,
      toggleTheme: toggleTheme,
      selectTask: selectTask
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
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <MyBody>
          <MyApp> 
            <Form/>
            <List />
            <StopWatch selectedTask={selectedTask} finishTask={finishTask}/>
            <Aside/>
          </MyApp>
        </MyBody>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
