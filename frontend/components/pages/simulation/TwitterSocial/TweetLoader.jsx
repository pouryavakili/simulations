import { Box, Skeleton } from "@mui/material";

const TweetLoader = () => {
  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(4, 7.5),
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      {/* Avatar and Text Skeleton */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: (theme) => theme.spacing(3.5),
        }}
      >
        {/* Avatar Skeleton */}
        <Skeleton variant="circular" width={64} height={64} />
        {/* Text Skeleton */}
        <Box sx={{ flexGrow: 1 }}>
          <Skeleton variant="text" width="50%" height={24} />
          <Skeleton variant="text" width="80%" height={24} />
        </Box>
      </Box>

      {/* Interaction Skeletons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: (theme) => theme.spacing(4),
          padding: (theme) => theme.spacing(3.5),
        }}
      >
        <Skeleton variant="rectangular" sx={{ borderRadius : "50%" }} width={20} height={20} />
        <Skeleton variant="rectangular" sx={{ borderRadius : "50%" }} width={20} height={20} />
        <Skeleton variant="rectangular" sx={{ borderRadius : "50%" }} width={20} height={20} />
        <Skeleton variant="rectangular" sx={{ borderRadius : "50%" }} width={20} height={20} />
        <Skeleton variant="rectangular" sx={{ borderRadius : "50%" }} width={20} height={20} />
      </Box>
    </Box>
  );
};

export default TweetLoader;
