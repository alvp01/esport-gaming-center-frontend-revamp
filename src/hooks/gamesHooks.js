import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchGames = async (url, header) => {
  const { data }= await axios.get(url, {
    headers: header
  });
  
  return data;
};

const deleteGame = async (url, header) => {
  const response = await axios.delete(url, {
    headers: header
  });

  return response;
}

const updateGame = async (url, game, header) => {
  const response = await axios.put(url, game, {
    headers: header
  });

  return response;
}

const createGame = async (url, game, header) => {
  const response = await axios.post(url, game, {
    headers: header
  });

  return response;
}

export const useFetchGames = (url, header) => {
  return useQuery(["games"], fetchGames(url, header));
}

export const useDeleteGame = (url, header) => {
  return useMutation(() => deleteGame(url, header));
}

export const useUpdateGame = (url, header, game) => {
  return useMutation(() => updateGame(url, game, header));
}

export const useCreateGame = (url, header, game) => {
  return useMutation(() => createGame(url, game, header));
}