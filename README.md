# bootstrap-experiments
Small forays into learning Bootstrap 4

None of these are very interesting. Just me trying to figure out how to use Bootstrap 4 to build responsive web sites. 

## Bin directory

1) create_images.py Utility script to play with python's Pillow library and to create images I can use in my image carousel examples. 

## Small Header 

This is named for a design I am having to build for $work. It is a slideshow on the right with the image title and description in a div on the left - except on mobile where the title and description wrap to be underneath the image.


## Carousel with Bottom Thumbnails

It is a slideshow with a row of slideshow images below the main display area. 
	* Clicking on the left and right arrows at the edge of the thumbnail tray scrolls the thumbnails that direction 1 image until there are no more images to show in that direction.

	* Clicking on any of the thumbnails makes the corresponding full sized image show in the main display area.

To be fair, this example doesn't really use much Bootstrap at all (other than 'd-flex' and 'w-100').