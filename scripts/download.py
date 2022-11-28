import urllib
import json

f = open('all_images.json')

images = json.load(f)

for img in images:
    file = img.split(".com/")[1]
    urllib.urlretrieve(img, "images/%s"%(file))
    