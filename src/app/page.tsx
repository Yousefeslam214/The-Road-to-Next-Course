import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Home Page</h2>
      <Link href="/tickets">View Tickets</Link>
    </div>
  );
};

export default HomePage;
