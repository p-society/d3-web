import os
from PIL import Image
import argparse

def convert_png_to_webp(input_file, output_file, quality=80): # type: ignore
    """Convert a PNG image to WebP format with specified quality"""
    try:
        image = Image.open(input_file) # type: ignore
        image.save(output_file, 'WEBP', quality=quality) # type: ignore
        print(f"Converted: {input_file} -> {output_file}")
        return True
    except Exception as e:
        print(f"Error converting {input_file}: {e}")
        return False

def process_directory(directory, recursive=True, quality=80, delete_original=False): # type: ignore
    """Process all PNG files in a directory and convert them to WebP"""
    total_files = 0
    successful_conversions = 0

    for root, dirs, files in os.walk(directory): # type: ignore
        for file in files: # type: ignore
            if file.lower().endswith('.png') or file.lower().endswith('.jpg'): # type: ignore
                input_path = os.path.join(root, file) # type: ignore
                output_path = os.path.splitext(input_path)[0] + '.webp' # type: ignore
                
                if convert_png_to_webp(input_path, output_path, quality): # type: ignore
                    successful_conversions += 1
                    if delete_original:
                        try:
                            os.remove(input_path) # type: ignore
                            print(f"Deleted original: {input_path}")
                        except Exception as e:
                            print(f"Error deleting {input_path}: {e}")
                
                total_files += 1
        
        if not recursive:
            break  # Don't process subdirectories if recursive is False
    
    return total_files, successful_conversions

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert PNG images to WebP format')
    parser.add_argument('directory', type=str, help='Directory containing PNG images')
    parser.add_argument('-r', '--recursive', action='store_true', help='Process subdirectories recursively')
    parser.add_argument('-q', '--quality', type=int, default=80, help='WebP quality (0-100, default: 80)')
    parser.add_argument('-d', '--delete', action='store_true', help='Delete original PNG files after conversion')
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"Error: {args.directory} is not a valid directory")
        exit(1)

    print(f"Starting conversion in {args.directory} (recursive: {args.recursive}, quality: {args.quality})")
    total, successful = process_directory(
        args.directory, 
        recursive=args.recursive, 
        quality=args.quality,
        delete_original=args.delete
    )
    
    print(f"\nConversion complete: {successful} of {total} files converted successfully")
    if args.delete and successful > 0:
        print(f"Original PNG files were deleted for successful conversions")