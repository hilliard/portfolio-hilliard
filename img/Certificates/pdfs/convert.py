import fitz
import os
import glob
from PIL import Image, ImageChops, ImageFilter

pdf_dir = '.'
jpg_dir = os.path.join(pdf_dir, 'jpg')
os.makedirs(jpg_dir, exist_ok=True)

pdfs = glob.glob(os.path.join(pdf_dir, '*.pdf'))
print(f"Found {len(pdfs)} PDF files.")

for pdf_path in pdfs:
    filename = os.path.basename(pdf_path)
    print(f"Processing {filename}...")
    doc = fitz.open(pdf_path)
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # Render the page to a pixmap, scale by 3 for high resolution
        matrix = fitz.Matrix(3, 3)
        pix = page.get_pixmap(matrix=matrix, colorspace=fitz.csRGB)
        
        # Convert to PIL Image
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        # Auto-crop white borders, ignoring thin text
        bg = Image.new(img.mode, img.size, (255, 255, 255))
        diff = ImageChops.difference(img, bg)
        diff_gray = diff.convert("L")
        
        # Apply MinFilter (size 15 for safety against large text fonts when scaled x3)
        # Filter size 15 will eliminate elements up to 7 pixels thick.
        eroded_diff = diff_gray.filter(ImageFilter.MinFilter(15))
        bbox = eroded_diff.getbbox()
        
        if bbox:
            # Re-pad by half the filter size (7) to restore the true edge of the large certificate block
            padding = 7
            padded_bbox = (
                max(0, bbox[0] - padding),
                max(0, bbox[1] - padding),
                min(img.width, bbox[2] + padding),
                min(img.height, bbox[3] + padding)
            )
            # Crop the image to bounding box
            img = img.crop(padded_bbox)
        
        # Save the first page only since certificates are usually 1 page
        out_name = f"{os.path.splitext(filename)[0]}.jpg"
        out_path = os.path.join(jpg_dir, out_name)
        img.save(out_path, "JPEG", quality=95)
        print(f"Saved {out_path}")
        break

print("Done processing all PDFs.")
