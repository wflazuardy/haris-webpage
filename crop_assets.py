from PIL import Image
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get bounding box of non-transparent pixels
        bbox = img.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped {input_path} -> {output_path}")
            print(f"Original size: {img.size}, New size: {cropped_img.size}")
        else:
            print(f"No content found in {input_path} (image might be fully transparent)")
            
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")

# Crop the logo for Favicon usage
input_logo = "public/assets/HARIS - Logo.png"
output_favicon = "public/assets/HARIS - Favicon.png"

if os.path.exists(input_logo):
    crop_image(input_logo, output_favicon)
else:
    print(f"Input file not found: {input_logo}")
