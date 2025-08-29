import { Hono } from "hono";
import { cors } from "hono/cors";
import createProduct from "./routes/createProduct";
import allProduct from "./routes/bulkProduct";
import reviewRoute from "./routes/reviewRoute";
import deleteProductRoute from "./routes/deleteProduct";
import imgRoute from "./routes/deleteImg";
import loginRoute from "./routes/login";
import orderRoute from "./routes/orderRoute";

type Env = {
  Bindings: {
    URL: string;
  };
};

const app = new Hono();
app.use("*", cors());

app.get("/", (c) => {
  return c.text("Bond Store Project");
});
app.route("/api/v1/login", loginRoute);
app.route("/api/v1/createproduct", createProduct);
app.route("/api/v1/allproduct", allProduct);
app.route("/api/v1/deleteProduct", deleteProductRoute);
app.route("/api/v1/img", imgRoute);
app.route("/api/v1/order", orderRoute);
app.route("/api/v1/review", reviewRoute);

export default app;
