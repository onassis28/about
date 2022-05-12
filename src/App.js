
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <div className='container'>
   <Navbar/>
  <p>No. Ideally, you should not be receiving a verification code at random. You only get it after requesting it from Google. In most cases, you will see the numeric code in your email if you cannot log into your account. You will also get it if you have made changes to your account.

But if you receive a Google verification code email without requesting it, the best explanation is somebody is trying to access your account. It could also be due to a glitch in the Gmail software, but this is highly unlikely.</p>
     </div>
  </>)
}

export default App;
