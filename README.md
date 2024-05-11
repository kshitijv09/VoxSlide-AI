# VoxSlide-AI

VoxSlide-AI is a versatile tool designed to empower users to create short audio-visual clips effortlessly, either based on text files or by recording audio. With its intuitive interface and powerful features, VoxSlide-AI opens up a world of possibilities for content creators, educators, and anyone looking to add a dynamic touch to their presentations or social media content.

## Features

- **Text-to-Video Conversion**: Convert text files into engaging audio-visual clips with ease.
- **Audio Recording**: Record audio directly within the application and transform it into captivating visuals.
- **Flexible Export**: Download video clips in popular formats for easy sharing on social media platforms or integration into presentations.

## Use Cases

- **Content Creation**: VoxSlide-AI simplifies the process of creating engaging content for social media platforms, blogs, or websites.
- **Educational Videos**: Teachers and educators can use VoxSlide-AI to create interactive and visually appealing educational videos to enhance learning experiences.
- **Presentation Enhancement**: Add a dynamic element to presentations by converting text or audio content into visually compelling video clips.
- **Promotional Material**: Businesses and marketers can leverage VoxSlide-AI to create simple and interactive content that stands out.

## Tech Stack

- **FrontEnd**: React, react-speech-recognition, Bulma(CSS library).
- **BackEnd**: Flask, Moviepy (Video Editing and Manipulation), ImageMagick (Image Processing)
- **ML Model**: Hugging Face's text-to-image model is utilized for generating images based on input text -  huggingface.co/stabilityai/stable-diffusion-xl-base-1.0

## How to Run VoxSlide-AI

To run VoxSlide-AI on your local machine, follow these steps:

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-username/VoxSlide-AI.git
2. Navigate into the server directory
   ```bash
    cd VoxSlide-AI/server
3. Install the server dependencies
   ```bash
   pip install -r requirements.txt
4. Install ImageMagick on your local machine.
5. Get the Hugging Face Text to Image Model API link and token from [Hugging Face](https://huggingface.co/models) and put them in the .env file.
6. Run the Flask server using uvicorn
   ```bash
     python3 app.py
7. Navigate out of the server folder
   ```bash
     cd ..
8. Install the frontend dependencies
    ```bash
     npm install
9. Start the client server
    ```bash
     npm start
10.  Access VoxSlide-AI in your web browser at http://localhost:3000. The server runs on port 5000.   




