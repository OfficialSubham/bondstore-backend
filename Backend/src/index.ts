import { Hono } from "hono";
import { cors } from "hono/cors";
import createProduct from "./routes/createProduct";
import allProduct from "./routes/bulkProduct";
import reviewRoute from "./routes/reviewRoute";
import deleteProductRoute from "./routes/deleteProduct";
import imgRoute from "./routes/deleteImg";

type Env = {
  Bindings: {
    URL: string;
  };
};

const app = new Hono();

app.use("*", cors());

app.route("/api/v1/createproduct", createProduct);
app.route("/api/v1/allproduct", allProduct);
app.route("/api/v1/deleteProduct", deleteProductRoute);
app.route("/api/v1/img", imgRoute);
app.route("/api/v1/review", reviewRoute);

app.get("/", (c) => {
  return c.text("Bond Store Project");
});

export default app;
