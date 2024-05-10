import requests
import io
from PIL import Image
from gtts import gTTS
from moviepy.editor import ImageClip, TextClip, CompositeVideoClip, AudioFileClip, concatenate_videoclips
import re, os
from dotenv import load_dotenv

load_dotenv()
API_URL = os.getenv("API_URL")
TOKEN=os.getenv("TOKEN")

def create_video_from_text(file_path):
    video_clips = []
    audio_durations = []
    
    headers = {"Authorization": f"Bearer {TOKEN}"}

    with open(file_path, "r") as file:
        text = file.read()
    paragraphs = re.split(r"[,.]", text)

    for i, para in enumerate(paragraphs[:-1]):
        try:
            response = requests.post(API_URL, headers=headers, json={"inputs": para.strip()})
            response.raise_for_status() 

            image_bytes = response.content
            if image_bytes.startswith(b'\xff\xd8'): 
                image = Image.open(io.BytesIO(image_bytes))
                output_dir = "images"
                os.makedirs(output_dir, exist_ok=True)
                image_path = os.path.join(output_dir, f"image{i}.jpg")
                image.save(image_path)
                print(f"Generated image saved as: {image_path}")
            else:
                print("The response does not contain a valid image.")
        except requests.RequestException as e:
            print(f"Failed to fetch image from API for paragraph {i}: {str(e)}")
            continue 

        tts = gTTS(text=para, lang='en', slow=False)
        audio_dir = "audio"
        os.makedirs(audio_dir, exist_ok=True)
        audio_path = os.path.join(audio_dir, f"voiceover{i}.mp3")
        tts.save(audio_path)
        print(f"Paragraph converted to voiceover and saved as: audio/voiceover{i}.mp3")

        audio_clip = AudioFileClip(audio_path)
        audio_durations.append(audio_clip.duration)
        image_clip = ImageClip(f"images/image{i}.jpg").set_duration(audio_clip.duration)
        text_clip = TextClip(para, fontsize=30, color="white").set_pos('bottom').set_duration(audio_clip.duration)

        clip = CompositeVideoClip([image_clip.set_audio(audio_clip), text_clip])
        video_clips.append(clip)

        individual_video_path = f"videos/video{i}.mp4"
        video_clips[-1].write_videofile(individual_video_path, fps=24, verbose=False)
        print(f"Individual video {i} has been created successfully!")

    final_video = concatenate_videoclips(video_clips, method="compose")
    final_video_path = "videos/final_video.mp4"
    final_video.write_videofile(final_video_path, fps=24)
    print("The final video has been created successfully!")

    return final_video_path
