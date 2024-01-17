import { useContext, useState } from 'react';
import Form from '../Components/Form/Index';
import List from '../Components/List/Index';
import StopWatch from '../Components/StopWatch/Index';
import { MyApp } from './style';
import { ITask } from '../Types/Task';

import MyContext from '../Context/Context';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../Context/Theme';
import { MyBody } from '../bodyStyle';



function App() {
  const [taskList, setTaskList] = useState<ITask[] | []>([])
  const [selectedTask, setSelected] = useState<ITask>()
  
  const [theme, toggleTheme] = useState<string>('light')

  const defaultContextValue = {
      teste: "meu teste 2",
      color: "#ffff",
      theme: theme,
      toggleTheme: toggleTheme
  }

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
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <MyBody>
          <MyApp> 
            <Form setTaskList={setTaskList}/>
            <List 
              taskList={taskList}
              selectTask={selectTask}
            />
            <StopWatch selectedTask={selectedTask} finishTask={finishTask}/>
          </MyApp>
        </MyBody>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
