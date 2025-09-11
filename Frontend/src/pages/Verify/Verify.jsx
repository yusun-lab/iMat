import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function Verify() {
  const [searchParams, setSearchparams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  // console.log(success, orderId);

  const verifyPayment = async () => {
    const response = await axios.post(
      url + "/api/order/verify",
      {
        success,
        orderId,
      },
      { headers: { token } }
    );
    if (response.data.success) {
      navigate("/my-orders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  });

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
}

export default Verify;
