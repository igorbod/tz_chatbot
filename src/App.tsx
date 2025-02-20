import '@/assets/scss/init.scss';
import { ToastContainer } from 'react-toastify';
import {ChatBot} from "@/modules/ChatBot";

function App() {
  return (
    <>
      <ChatBot />
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
