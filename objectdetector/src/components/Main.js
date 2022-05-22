import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import ImageCanvas from "./ImageCanvas";
import ImageUploader from "./ImageUploader";
import PredictionDetails from "./PredictionDetails";

const Main = () => {
  const { ImageStore } = useRootStore();

  return (
    <Box
      sx={{
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop:1
      }}
    >
      {ImageStore.predictions.length > 0 && (
        <Box sx={{display:'flex', flexDirection:'row', width:'80%', justifyContent:'space-between '}}>
          <ImageCanvas />
          <PredictionDetails />
        </Box>
      )}
      <ImageUploader heightIfPreds={ImageStore.predictions.length>0} />
    </Box>
  );
};

export default observer(Main);
