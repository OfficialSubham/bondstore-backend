import { Context, Hono } from "hono";
import { sign } from "hono/jwt";

const loginRoute = new Hono();

loginRoute.post("/", async (c: Context) => {
  try {
    const body = await c.req.json();
    const { username, password } = body;
    const dbUsername = c.env.USERNAME;
    const dbPassword = c.env.PASSWORD;
    if (username != dbUsername || password != dbPassword)
      return c.json({ msg: "Please enter valid credential" }, 400);
    const privateKey = c.env.LOGINKEY;
    const token = await sign(username, privateKey);
    console.log(token);
    return c.json({ msg: "Login Successfully", token });
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});

export default loginRoute;
