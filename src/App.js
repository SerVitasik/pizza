import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Dishes from './components/Dishes/Dishes';
import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';


function App() {

  const [isShowModal, setIsShowModal] = React.useState(false);

  const onOpenModal = () => {
    setIsShowModal(true);
  }

  const onCancelModal = () => {
    setIsShowModal(false);
  }


  return (
    <CartProvider>
      {isShowModal && <Cart onCancel={onCancelModal} />}
      <Header onOpenModal={onOpenModal}></Header>
      <main>

        <Dishes />
      </main>
    </CartProvider>
  );
}

export default App;
