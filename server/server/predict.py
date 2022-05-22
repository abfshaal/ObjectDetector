def predict(model,img):
    predictions = model(img)
    predictions = predictions.pandas().xyxyn[0].values.tolist()
    return predictions