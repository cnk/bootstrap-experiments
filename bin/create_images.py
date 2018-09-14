from PIL import Image, ImageDraw, ImageFont, ImageColor
 

def create_image(hsv_color, dest_file, width=800, height=450, display_size=True):
	img = Image.new('RGB', (width, height), color=hsv_color)
	
	# Write the dimensions of the image on it
	fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', int(width/20))
	d = ImageDraw.Draw(img)
	if display_size:
		# The first arg to d.text is upper left corner of the text. The ugly math below gives sort of centered text
		d.text(((width/2 - int(width/10)), (height/2 - int(width/20))), 
			   f"{width} x {height}", 
			   font=fnt, 
			   align="center", 
			   fill=contrasting_color(hsv_color)
			   )
	 
	img.save(dest_file)


# I did this in HSV style colors mainly because this SO post had a super simple way to calculate when to use black or white for text on a color
#  https://gamedev.stackexchange.com/questions/38536/given-a-rgb-color-x-how-to-find-the-most-contrasting-color-y
def contrasting_color(hsv_color):
	h, s, v = ImageColor.getcolor(hsv_color, 'HSV')
	hue = (h + 0.5 ) % 1
	saturation = '0%' if s > 0.5  else '100%'
	value = '0%' if v > 0.5 else '100%'
	result = f'hsv({hue}, {saturation}, {value})'
	# result = ImageColor.getcolor((hue, saturation, value), 'HSV')
	return result

for hue in [0, 60, 90, 150, 210, 270, 330]:
	# create main images
	create_image(f'hsv({hue},75%,100%)', f'../tmp/{hue}.png', width=800, height=450)
	# create thumbnails
	create_image(f'hsv({hue},75%,100%)', f'../tmp/{hue}-thumbnail.png', width=200, height=112)
