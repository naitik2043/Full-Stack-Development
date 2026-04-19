import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    alert("Order Placed Successfully ✅");

    setFormData({
      name: "",
      email: "",
      address: "",
      contact: ""
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Checkout Details</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter full name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="contact"
        placeholder="Enter contact number"
        value={formData.contact}
        onChange={handleChange}
        pattern="[0-9]{10}"
        required
      />

      <textarea
        name="address"
        placeholder="Enter address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <button type="submit">Place Order</button>
    </form>
  );
}