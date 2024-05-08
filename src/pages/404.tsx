import React from "react";
import { Heading } from "../components/common";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="errorpage">
      <Heading text="404 Page Not Found" />
      <p>
        We&apos;re sorry, but it seems you&apos;ve stumbled upon a page that
        doesn&apos;t exist.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Browsing
      </button>
    </div>
  );
};

export default NotFound;
