"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Home() {
  const handleSubmit = async () => {
    const data = await axios.post("/api/auth/login", {
      email: "admin@admin.com",
      password: "password123",
    });
    console.log(data);
  };

  const getMe = async () => {
    const data = await axios.get("/api/users/me");
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home page
      <Button onClick={handleSubmit}>Click</Button>
      <Button onClick={getMe}>Get Me</Button>
    </main>
  );
}
