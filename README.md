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

## Article with Background Images

The NYTimes (among others) have published some really cool articles that have full width background images that change to go with the text you scroll through. A recent example has inspired me to try to do something similar:

https://www.nytimes.com/interactive/2018/09/12/business/las-vegas-housing-crisis.html

The NYTimes example has the images in div's of their own, followed by the caption (which also serves as the section title) and then a couple of paragraphs of text. When the user scrolls past the section title to the text, then a black overlay fades in to provide better contrast between the white text and the image below. In this example the images that appear behind the text are not actually background images.

For my first attempt, I think I do want to experiment with making the images into actual background images so I can use 'background-size' attributes.
