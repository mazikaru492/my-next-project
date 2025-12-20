import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export default createNextAuthMiddleware();
export const config = {
  matcher: ["/(.*)"],
};
