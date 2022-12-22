import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';

const reminders: Reminder[] = [
  {id:1,title:"Reminder one"}
]

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />    
    </div>
  );
}

export default App;
