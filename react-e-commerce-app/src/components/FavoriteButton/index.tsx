import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

interface IProps {
  position?: "absolute" | "static";
}

const FavoriteButton = ({ position = "absolute" }: IProps) => {
  const handleClickFavorite = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid #9e9e9e",
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "38px",
        width: "38px",
        "&:hover svg": {
          fill: "#FBB03B",
          transition: "fill 0.2s linear",
        },
        position: position,
        right: "23px",
        top: "19px",
      }}
      onClick={handleClickFavorite}
    >
      <FavoriteBorderOutlined />
    </Box>
  );
};

export default FavoriteButton;