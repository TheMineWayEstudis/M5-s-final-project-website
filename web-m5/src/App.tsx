import './App.css';
import showNotification from './view/quiz/showNotification';
import Routes from './routes/Routes';

export default function App() {

  showNotification();

  return (
    <Routes/>
  );
}