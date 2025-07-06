import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto h-screen">
        <form action="" className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1>SIGN UP</h1>
          <div>
            <Label>
              Full Name
            </Label>
            <Input
            type="text"
            placeholder="Enter your full name"/>
          </div>
        </form>
      </div>
      </div>
  );
}

export default Signup;
