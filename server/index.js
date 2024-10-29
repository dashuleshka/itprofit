const express = require("express");
const cors = require("cors");
const app = express();

const port = 9090;

app.use(cors());
app.use(express.json());

app.post("/api/registration", (req, res) => {
  const { name, email, phone, message } = req.body;
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.email = "Enter a valid e-mail address.";
    }
  }

  if (!phone) {
    errors.phone = "Phone is required.";
  }

  if (!message) {
    errors.message = "Message is required.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      status: "error",
      fields: errors,
    });
  }

  return res.status(200).json({
    status: "success",
    msg: "Ваша заявка успешно отправлена",
  });
});

app.get("/api/ping", (req, res) => {
  res.statusCode = 200;
  res.send({
    status: "success",
    message: "Server is ready",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
