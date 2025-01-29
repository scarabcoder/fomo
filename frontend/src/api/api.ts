import { hc } from "hono/client";
import { AppType } from "../../../backend/src/domain/session/route";

const client = hc<AppType>("");
