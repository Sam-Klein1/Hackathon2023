import moviepy.editor as mp

# Load the audio file
audio = mp.AudioFileClip("path/to/audio.mp3")

# Load the image file
image = mp.ImageClip("path/to/image.jpeg")

# Set the duration of the image to match the audio file
image = image.set_duration(audio.duration)

# Overlay the audio onto the image
final_clip = mp.CompositeVideoClip([image, audio])

# Save the final video
final_clip.write_videofile("path/to/output.mp4", fps=24)