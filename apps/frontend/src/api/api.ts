import { QueryClient } from "@tanstack/react-query";
import { hcWithType } from "@fomo/backend/hc";


export const fomoClient = hcWithType(window.location.origin + "/api");
export const queryClient = new QueryClient();

