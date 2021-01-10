import React from 'react';
import { toast as toastConf } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from './customToast';
import logo from './logo.svg';
import './App.css';

toastConf.configure();

function App() {
  const notify = () =>
    toast.success(
      '🦄 Wow so easy!',
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
      toast.error('🦄 Wow so easy!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={notify}>Click here</button>
      </header>
    </div>
  );
}

export default App;
