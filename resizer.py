from PIL import Image
import os

for root, dirs, files in os.walk('./bler') :
	new = root.replace("bler", "resize")
	try : 
		if not os.path.exists(new) :
			os.makedirs(new)
	except OSError :
		print("error")

	for fname in files :
		image = Image.open(os.path.join(root, fname))
		resize_image = image.resize((int(image.width / 2), int(image.height / 2)), Image.LANCZOS)
		resize_image.save(os.path.join(new, fname))
		

