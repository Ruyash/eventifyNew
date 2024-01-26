import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EventRegistration.css";
import { useNavigate } from "react-router-dom";

const EventRegistration = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setcontact] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    formData();
  }, []);

  const formData = () => {
    axios
      .get("http://localhost:3001/event-registration")
      .then((res) => {
        const userData = res.data[0];
        setFullname(userData.fullName);
        setEmail(userData.email);
        setStudentId(userData.studentId);
        setCollege(userData.college);
        setDepartment(userData.department);
        setcontact(userData.contact);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  };

  const handleRazorpayPayment = () => {
    if (amount === "") {
      alert("Enter Amount");
    } else {
      var options = {
        key: "rzp_test_V8E0muLoBcLl7Z",
        key_secret: "veUbd3LeXmSwZ16cXyP4Pl1W",
        amount: amount * 100,
        currency: "INR",
        name: "Event Payment",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          setPaymentSuccess(true);
        },
        prefill: {
          name: "hikejack",
          email: "hikejack02@gmail.com",
          contact: "8489856878",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  const submitFormData = () => {
    axios
      .post("http://localhost:3001/event-registration", {
        fullName,
        email,
        studentId,
        college,
        department,
        contact,
      })
      .then(() => {
        alert("Registration Successful");
        setFullname("");
        setEmail("");
        setStudentId("");
        setCollege("");
        setDepartment("");
        setcontact("");
        setAmount("");
        navigate("/");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  const handlePaymentAndFormData = async (event) => {
    event.preventDefault();
    handleRazorpayPayment();
  };

  return (
    <div className="event-registration">
      {paymentSuccess ? (
        <>
          <h2>Event Register</h2>
          <form onSubmit={submitFormData}>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="studentId">Student ID:</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="college">College:</label>
              <input
                type="text"
                id="college"
                name="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="contact">Contact:</label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div className="Payment">
          <h2>Enter Amount</h2>
          <br />
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <br />
          <br />
          <button onClick={handlePaymentAndFormData}>Pay</button>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;
