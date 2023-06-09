import './src/api/MockServer'
import RootNavigation from "./src/navigation";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return <RootNavigation></RootNavigation>;
}

