'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Download, ClipboardCopy, CheckCircle2, Loader2 } from "lucide-react";

// Define the order type
type Product = {
  name: string;
  quantity: number;
  price: number;
};

type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type Order = {
  _id: string;
  userName: string;
  email: string;
  phone: string;
  createdAt: string;
  totalCost: number;
  address: Address;
  products: Product[];
};

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState("");

  // Dummy data for orders
  useEffect(() => {
    const dummyOrders = [
      {
        _id: "ORD123456",
        userName: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
        createdAt: new Date().toISOString(),
        totalCost: 599,
        address: {
          street: "123 Main St",
          city: "Mumbai",
          postCode: "400001",
          country: "India",
        },
        products: [
          { name: "Caramel Latte", quantity: 2, price: 199 },
          { name: "Iced Americano", quantity: 1, price: 149 },
        ],
      },
      {
        _id: "ORD654321",
        userName: "Jane Smith",
        email: "jane@example.com",
        phone: "9123456780",
        createdAt: new Date().toISOString(),
        totalCost: 229,
        address: {
          street: "456 Park Ave",
          city: "Delhi",
          postCode: "110001",
          country: "India",
        },
        products: [{ name: "Matcha Frappe", quantity: 1, price: 229 }],
      },
    ];

    // Simulate loading
    setTimeout(() => {
      setOrders(dummyOrders);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    alert("Order ID copied!");
  };

  const handleDownloadInvoice = (order: Order) => {
    alert(`Invoice for ${order._id} would be downloaded (dummy).`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#090701] text-white">
        <Loader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="bg-[#090701] min-h-screen overflow-hidden text-white">
      <Navbar />
      <div className="min-h-screen py-10 px-6 lg:px-20">
        <h1 className="text-4xl font-bold mb-10">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-[1400px]">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-[#131313] rounded-xl shadow-md p-5 space-y-5 border border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Order ID</h2>
                  <button onClick={() => handleCopy(order._id)}>
                    {copiedId === order._id ? (
                      <CheckCircle2 className="w-5 h-5 text-lime-400" />
                    ) : (
                      <ClipboardCopy className="w-5 h-5 text-gray-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-sm break-words text-gray-400">{order._id}</p>

                <div>
                  <h3 className="font-medium text-md">Products</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {order.products.map((product, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>
                          {product.name} x {product.quantity}
                        </span>
                        <span>₹{product.price * product.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-400 space-y-1">
                  <p>
                    <span className="font-semibold">Total:</span> ₹{order.totalCost}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> ✅ Paid
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  <p className="font-semibold text-white">Address</p>
                  <p>
                    {order.address.street}, {order.address.city} - {order.address.postCode},{" "}
                    {order.address.country}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDownloadInvoice(order)}
                    className="bg-lime-400 hover:bg-lime-500 px-4 py-4 rounded-full flex items-center justify-center gap-2 text-black"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
