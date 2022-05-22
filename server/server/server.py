from ast import Bytes
import torch
import tornado
import tornado.web
from PIL import Image
from io import BytesIO
import base64
from predict import predict


model = torch.hub.load('ultralytics/yolov5', 'yolov5s')


class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    async def post(self):        
        try:
            files = self.request.files
            file = files['file'][0]['body']
            img = Image.open(BytesIO(file))
            predictions = predict(model, img)
            
        except:
            predictions = []
            
        self.write({"result":predictions})


def make_app():
    return tornado.web.Application([
        (r"/detectImage" , MainHandler)
    ])


if __name__ =='__main__':
    app=make_app()
    app.listen(5000)
    tornado.ioloop.IOLoop.current().start()