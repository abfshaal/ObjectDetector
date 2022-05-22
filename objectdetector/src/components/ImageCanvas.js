import { Rect, Stage, Layer, Image, Text, Label, Tag } from "react-konva";
import useRootStore from "../hooks/useRootStore";
import useImage from "use-image";
import { observer } from "mobx-react";
import Konva from "konva";
const ImageCanvas = () => {
  const { ImageStore } = useRootStore();
  const [img] = useImage(ImageStore.image);

  return (
    <Stage height={500} width={500}>
      <Layer height={500} width={500}>
        <Image image={img} height={500} width={500} />
        {ImageStore.predictions.map((el) => {
          return (
            <>
              <Rect
                x={el[0] * 500}
                y={el[1] * 500}
                width={500 * (el[2] - el[0])}
                height={500 * (el[3] - el[1])}
                stroke={el[7]}
              />
              <Label x={el[0] * 500} y={el[1] * 500 - 15}>
                <Tag fill={el[7]}/>
                <Text
                  text={el[6]}
                  x={el[0] * 500}
                  y={el[1] * 500 - 15}
                  fill="white"
                  padding={5}
                />
              </Label>
            </>
          );
        })}
      </Layer>
    </Stage>
  );
};

export default observer(ImageCanvas);
