"use client";

import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript for client-side only
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        // Bootstrap JS is loaded
        console.log("Bootstrap JS loaded successfully.");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS:", err);
      });
  }, []);

  return null; // No need to render anything
};

export default BootstrapClient;
