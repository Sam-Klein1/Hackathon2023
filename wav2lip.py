import replicate

model = replicate.models.get("devxpy/cog-wav2lip")
version = model.versions.get("8d65e3f4f4298520e079198b493c25adfc43c058ffec924f2aefc8010ed25eef")

# https://replicate.com/devxpy/cog-wav2lip/versions/8d65e3f4f4298520e079198b493c25adfc43c058ffec924f2aefc8010ed25eef#input
inputs = {
    # video/image that contains faces to use
    # 'face': open("path/to/file", "rb"),

    # video/audio file to use as raw audio source
    # 'audio': open("path/to/file", "rb"),

    # Padding for the detected face bounding box. Please adjust to include
    # chin at least Format: "top bottom left right"
    'pads': "0 10 0 0",

    # Smooth face detections over a short temporal window
    'smooth': True,

    # Can be specified only if input is a static image
    'fps': 25,

    # Reduce the resolution by this factor. Sometimes, best results are
    # obtained at 480p or 720p
    'resize_factor': 1,
}

# https://replicate.com/devxpy/cog-wav2lip/versions/8d65e3f4f4298520e079198b493c25adfc43c058ffec924f2aefc8010ed25eef#output-schema
output = version.predict(**inputs)
print(output)