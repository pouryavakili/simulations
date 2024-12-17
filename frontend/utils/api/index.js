import axiosClient from "./axiosClient";
import handleApiError from "./handleApiError";

// Example: Get user profile
export const getAllTweets = async (userId) => {
  try {
    const response = await axiosClient.get("/tweets/", {
        headers: {
        "x-user-id": userId, // Dynamically pass the user ID
      },
    });
    return { success: true, data: response };
  } catch (error) {
    return handleApiError(error);
  }
};

// Example: Post login data
export const loginUser = async (credentials) => {
  try {
    const response = await axiosClient.post("/auth/login", credentials);
    return { success: true, data: response };
  } catch (error) {
    return handleApiError(error);
  }
};
