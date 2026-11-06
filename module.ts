import { defineModule } from "@prisma/composer";
import service from "./service";

export default defineModule({
  name: "moa-tradecenter",
  services: [service],
});