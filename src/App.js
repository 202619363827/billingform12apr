// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

const BillingForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [billItems, setBillItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddItem = () => {
    setBillItems([...billItems, { item: '', price: 0, quantity: 0 }]);
  };

  const handleChangeItem = (index, field, value) => {
    const updatedBillItems = [...billItems];
    updatedBillItems[index][field] = value;
    setBillItems(updatedBillItems);
  };

  const handleCreateBill = () => {
    // Create bill logic 
    const newTotal = billItems.reduce((other, item) => other + item.price * item.quantity, 0);
     setTotal(newTotal);
    // You can update state or send the data to the server here
  };

  return (
    <div>
      <h1>Billing Form</h1>
      <form>
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <h2>Bill Product</h2>
        {billItems.map((item, index) => (
          <div key={index}>
            <label htmlFor={`item {index}`}>Item</label>
            <input
              type="text"
              id={`item {index}`}
              value={item.item}
              onChange={(e) => handleChangeItem(index, 'item', e.target.value)}
            />
            <label htmlFor={`price${index}`}>Price</label>
            <input
              type="number"
              id={`price${index}`}
              value={item.price}
              onChange={(e) => handleChangeItem(index, 'price', parseFloat(e.target.value))}
            />
            <label htmlFor={`quantity${index}`}>Quantity</label>
            <input
              type="number"
              id={`quantity${index}`}
              value={item.quantity}
              onChange={(e) => handleChangeItem(index, 'quantity', parseInt(e.target.value))}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>
          Add More Item
        </button>
        <button type="button" onClick={handleCreateBill}>
          Create Bill
        </button>
      </form>
      <h2>Bill Details</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>

          {billItems.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.price}</td>    
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingForm;


