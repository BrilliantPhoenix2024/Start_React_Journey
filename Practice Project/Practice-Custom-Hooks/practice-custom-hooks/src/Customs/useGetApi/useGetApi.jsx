import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const useGetApi = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchData = () => {
    alert("Data is refetched.");
    refetch();
  };
  return { data, isLoading, refetchData };
};
