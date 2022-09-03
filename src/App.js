import React, { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="App">
      <main>
        <button className='open-btn' onClick={() => setModalActive(true)}>Открыть модальное окно</button>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto assumenda fuga impedit unde quod possimus similique ipsum delectus est harum modi aperiam suscipit corrupti ea vitae maiores, repellendus odio?</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet laborum veniam aliquam ea nisi atque quam omnis eveniet explicabo. Sed distinctio velit blanditiis at facere quisquam maiores ut tenetur aliquid!</p>
      </Modal>
    </div>
  );
}

export default App;
