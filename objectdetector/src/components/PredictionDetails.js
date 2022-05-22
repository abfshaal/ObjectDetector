import { Box, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react";
import useRootStore from "../hooks/useRootStore";

const PredictionDetails = () => {
  const { ImageStore } = useRootStore();

  return (
    <Box sx={{ width: "30%", marginTop: 5 }}>
      {ImageStore.predictions.map((el) => {
        return (
          <Paper sx={{ width: "100%", marginBottom:1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding:2
              }}
            >
              <Box sx={{ backgroundColor: el[7], height: 30, width: 30 }} />
              <Typography>{el[6]}</Typography>
              <Typography>{parseFloat(el[4]).toFixed(2)}</Typography>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default observer(PredictionDetails);
