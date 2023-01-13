import {
  ArrowBack as ArrowBackIcon,
  LocalShipping as LocalShippingIcon,
  Navigation as NavigationIcon,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

interface IProps {
  steps: string[];
  activeStep: number;
  totalCost: number;
  handleClickBackButton: () => void;
}

const CartFooter = ({
  steps,
  activeStep,
  totalCost,
  handleClickBackButton,
}: IProps) => {
  const navigate = useNavigate();

  const handleClickContinueShoppingButton = () => {
    navigate({ pathname: "/" });
  };

  return (
    <Stack
      rowGap="20px"
      columnGap="10px"
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      sx={{ justifyContent: { xs: "center", md: "space-between" } }}
    >
      {activeStep === 0 ? (
        <TextField
          label="Promo Code"
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "56px",
              width: "100%",
              maxWidth: "336px",
            },

            "& .MuiInputBase-input": {
              fontSize: "13px",
              fontWeight: theme.fontWeight.regular,
              paddingLeft: "24px",
            },
            "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
              fontSize: "13px",
              fontWeight: theme.fontWeight.regular,
              marginLeft: "10px",
              marginTop: "3px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  cursor: "pointer",
                  paddingRight: { sm: "17px" },
                  paddingTop: "2px",
                }}
              >
                <NavigationIcon
                  sx={{
                    transform: "rotate(90deg)",
                    fill: "#B5B5B5",
                    height: "20px",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <IconButton
          sx={{
            backgroundColor: "white",
            borderRadius: "0",
            color: "black",
            display: "flex",
            alignItem: "center",
            columnGap: "24px",
            marginRight: "5px",
            width: "max-content",
            "&:hover": { color: "black", backgroundColor: "white" },
          }}
          component="button"
          onClick={handleClickBackButton}
        >
          <ArrowBackIcon />
          <Typography fontSize="14px" fontWeight={theme.fontWeight.semiBold}>
            Back
          </Typography>
        </IconButton>
      )}

      {activeStep === 0 && (
        <Stack direction="row" sx={{ columnGap: { xs: "10px", lg: "33px" } }}>
          <Typography fontSize="16px" fontWeight={theme.fontWeight.light}>
            Total Cost:
          </Typography>
          <Typography fontSize="16px" fontWeight={theme.fontWeight.semiBold}>
            ${totalCost}
          </Typography>
        </Stack>
      )}

      {activeStep === steps.length && (
        <Stack direction="row" columnGap="16px" alignItems="center">
          <LocalShippingIcon sx={{ width: "20px", height: "12.56px" }} />
          <Typography fontSize="16px" fontWeight={theme.fontWeight.light}>
            You are <Typography>$30,02</Typography> missing for free shipping
          </Typography>
        </Stack>
      )}

      <Stack
        direction="row"
        width="max-content"
        maxWidth="100%"
        columnGap="26px"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        rowGap="20px"
      >
        <Button
          sx={{
            border: "1px solid #D8D8D8",
            borderRadius: "49px",
            color: "#000000",
            fontSize: "13px",
            fontWeight: theme.fontWeight.semiBold,
            textAlign: "center",
            height: "49px",
            width: "203px",
          }}
          onClick={handleClickContinueShoppingButton}
        >
          CONTINUE SHOPPING
        </Button>
        <Button
          sx={{
            backgroundColor: "#FBB03B",
            borderRadius: "56px",
            color: "#000000",
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            fontWeight: theme.fontWeight.semiBold,
            textAlign: "center",
            height: "49px",
            width: "116px",
            "&:hover": {
              backgroundColor: "#ffb53d",
            },
          }}
        >
          NEXT STEP
        </Button>
      </Stack>
    </Stack>
  );
};

export default CartFooter;
