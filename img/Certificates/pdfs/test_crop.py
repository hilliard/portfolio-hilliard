import fitz
import os
from PIL import Image, ImageChops, ImageFilter

pdf_path = 'Build-Developer-Portfolio-certificate.pdf'
doc = fitz.open(pdf_path)
page = doc[0]

matrix = fitz.Matrix(3, 3)
pix = page.get_pixmap(matrix=matrix, colorspace=fitz.csRGB)
img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

bg = Image.new(img.mode, img.size, (255, 255, 255))
diff = ImageChops.difference(img, bg)

# Convert diff to grayscale
diff_gray = diff.convert("L")

# To eliminate thin text, we can apply a MinFilter to the difference. 
# The difference is black (0) for white pixels, and >0 for non-white.
# Wait, small white text on black background? No, black text on white background.
# In diff, white background becomes 0. Black text becomes 255 (or high).
# The certificate is a huge block of high values.
# If we apply a MinFilter (which replaces a pixel with the minimum in its neighborhood),
# thin lines of high values (text) will be eroded to 0!
# We might need a large enough filter size, e.g., size 9 or 11.
eroded_diff = diff_gray.filter(ImageFilter.MinFilter(11))

bbox = eroded_diff.getbbox()
print("Eroded bbox:", bbox)

if bbox:
    # Because eroded_diff is eroded, the bbox might be slightly smaller than the true content.
    # We can either pad the bbox slightly or just use it (certificate usually has its own padding).
    # Let's see the coordinates.
    print("Original diff bbox:", diff.getbbox())
    img_cropped = img.crop(bbox)
    img_cropped.save('test_crop_eroded.jpg')
    print("Saved test_crop_eroded.jpg")
else:
    print("No bbox found")
