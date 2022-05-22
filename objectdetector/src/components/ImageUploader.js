import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import useRootStore from "../hooks/useRootStore";
import { observer } from "mobx-react";
const ImageUploder = ({ heightIfPreds }) => {
  const { ImageStore } = useRootStore();
  const [dragIn, setDragIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef(new FormData());

  const hiddenInputPick = useRef(null);
  const handleImagePick = async (e) => {
    setIsLoading(true)
    ImageStore.setImage(URL.createObjectURL(e.target.files[0]));
    form.current.append("file", e.target.files[0]);
    const { result } = await fetch(`http://localhost:5000/detectImage`, {
      method: "POST",
      body: form.current,
    }).then((response) => response.json());
    setIsLoading(false)
    ImageStore.setPredictions(result);
  };

  const handleCustomUploadClick = () => {
    hiddenInputPick.current.click();
  };
  const handleDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragIn = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragIn(true);
  };
  const handleDragOut = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragIn(false);
  };
  const handleDrop = async (e) => {
    setIsLoading(true)
    e.stopPropagation();
    e.preventDefault();
    setDragIn(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      ImageStore.setImage(URL.createObjectURL(e.dataTransfer.files[0]));
      form.current.append("file", e.dataTransfer.files[0]);
      const { result } = await fetch("http://localhost:5000/detectImage", {
        method: "POST",
        body: form.current,
      }).then((response) => response.json());
      ImageStore.setPredictions(result);
      setIsLoading(false)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: heightIfPreds ? "40%" : "80%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        ref={hiddenInputPick}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImagePick}
        style={{ display: "none" }}
      />
      <div
        style={{
          height: "50%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          borderStyle: "dotted",
          borderWidth: 1,
          borderColor: dragIn ? "blue" : "white",
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        onDragEnter={handleDragIn}
        onDrop={handleDrop}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
      >
        {isLoading ? <CircularProgress color='secondary'/> : 
          <>
          <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography> Drag and drop an Image!</Typography>
          <UploadIcon />
        </Box>
        <Button
          color='secondary'
          variant="outlined"
          sx={{ marginTop: "auto" }}
          onClick={handleCustomUploadClick}
          size="small"
        >
          search from files
        </Button>
        </>}
      </div>
    </div>
  );
};

export default observer(ImageUploder);
