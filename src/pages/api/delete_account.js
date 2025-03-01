export default async function handler(req, res) {
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    try {
      const response = await fetch("http://66.179.210.141:3000/api/v1/app/customers/verify_and_destroy", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      return res.status(response.status).json(data);
    } catch (error) {
      console.error("Proxy Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  