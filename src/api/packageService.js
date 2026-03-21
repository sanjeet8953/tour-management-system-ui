import axiosInstance from "./axiosInstance";

export const getAllPackages = () => {
  return axiosInstance.get("/package");
};

export const getPackageById = (id) => {
  return axiosInstance.get(`/package/${id}`);
};

export const createPackage = (data) => {
  return axiosInstance.post("/package", data);
};

export const updatePackage = (id, data) => {
  return axiosInstance.put(`/package/${id}`, data);
};

export const deletePackage = (id) => {
  return axiosInstance.delete(`/package/${id}`);
};