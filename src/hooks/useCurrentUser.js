import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../services/apiUser";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserData,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });
}
