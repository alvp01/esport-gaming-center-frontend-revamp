import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchReservations = async (url, header) => {
  const { data }= await axios.get(url, {
    headers: header
  });
  
  return data;
};

const deleteReservation = async (url, header) => {
  const response = await axios.delete(url, {
    headers: header
  });

  return response;
}

const updateReservation = async (url, reservation, header) => {
  const response = await axios.put(url, reservation, {
    headers: header
  });

  return response;
}

const createReservation = async (url, reservation, header) => {
  const response = await axios.post(url, reservation, {
    headers: header
  });

  return response;
}

export const useFetchReservations = (url, header) => {
  return useQuery(["reservations"], fetchReservations(url, header));
}

export const useDeleteReservation = (url, header) => {
  return useMutation(() => deleteReservation(url, header));
}

export const useUpdateReservation = (url, header, reservation) => {
  return useMutation(() => updateReservation(url, reservation, header));
}

export const useCreateReservation = (url, header, reservation) => {
  return useMutation(() => createReservation(url, reservation, header));
}