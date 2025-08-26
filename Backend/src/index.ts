import { Hono } from "hono";
import { cors } from "hono/cors";
import createProduct from "./routes/createProduct";
import allProduct from "./routes/bulkProduct";

type Env = {
  Bindings: {
    URL: string;
  };
};

const app = new Hono();

app.use("*", cors());

app.route("/api/v1/createproduct", createProduct);
app.route("/api/v1/allproduct", allProduct);

app.get("/", (c) => {
  return c.text("Bond Store Project");
});

export default app;
