import React from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  return (
    <div>
      <h2 className="text-5xl text-secondary">Payment is Successful</h2>
    </div>
  );
};

export default PaymentSuccess;
