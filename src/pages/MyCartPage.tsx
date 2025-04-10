import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyCartContainer from '../components/MyCartContainer';
import AddressCart from '../components/AddressCart';
import OrderSummary from '../components/OrderSummary';
import { useState } from 'react';

function MyCartPage() {
  const [isContinueClicked, setIsContinueClicked] = useState(false); // MyCartContainer → AddressCart
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false); // AddressCart → OrderSummary

  const handleAddressContinueClick = () => {
    setIsOrderSummaryOpen(true); // AddressCart’s CONTINUE opens OrderSummary
  };

  return (
    <div>
      <Navbar />
      <MyCartContainer setIsContinueClicked={setIsContinueClicked} />
      <AddressCart isContinueClicked={isContinueClicked} onContinueClick={handleAddressContinueClick} />
      <OrderSummary isContinueControlled={isOrderSummaryOpen} />
      <Footer />
    </div>
  );
}

export default MyCartPage;