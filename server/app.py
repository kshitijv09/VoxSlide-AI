from flask import Flask, request, jsonify,send_from_directory
from werkzeug.utils import secure_filename
from flask_cors import CORS
import requests
import os
from ttv import create_video_from_text

app = Flask(__name__)
CORS(app)  

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/punctuate', methods=['POST'])
def punctuate_text():
    text = request.json.get('text')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    url = 'http://bark.phon.ioc.ee/punctuator'
    try:
        response = requests.post(url, data={'text': text})
        response.raise_for_status() 
        return jsonify({"punctuated_text": response.text}), 200
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    print("File path is ",file_path)
    video_path = create_video_from_text(file_path)
    print("Video path is ",video_path)
    return send_from_directory(directory=os.path.dirname(video_path), path=os.path.basename(video_path), as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
