const handleApiError = (error) => {
  if (error.response) {
    console.error("Error Response:", error.response);
    return {
      success: false,
      status: error.response.status,
      message: error.response.data.message || "Something went wrong!",
    };
  }
  return {
    success: false,
    message: "Network error or server not reachable.",
  };
};

export default handleApiError;
