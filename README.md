# Object Detector

## Description

This is a simple webpage to allow any user a drag and drop interface to get predictions from yolov5.

The image addition can be done in a drag and drop, or file selection manner.

It will show the Image, the bounding boxes and the list of objects detected. 


## Packages used

### Front end 
* React as a framework for building the webpage
* Konva to draw the image and the bounding boxes
* Mui for components

### Back end
* Tornado to build the Api
* Pytorch to load the model and get predictions

### Container
* Docker


### Running the Service
Download the code and run 

``` bash build.sh ```

then you can access the webpage at http://localhost:80
