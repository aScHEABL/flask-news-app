# 匯入相關套件
import requests
from flask import Flask, render_template
from newsapi import NewsApiClient
from flask_cors import CORS

# 初始化Flask，並且允許Cross-Origin Resource Sharing
app = Flask(__name__)
CORS(app)
  
# 初始化API 
api = NewsApiClient(api_key='d060d091ddeb4a18af8a7907ce4b88be')
  
# 頭條新聞
@app.route('/headlines', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def headlines():
    response = requests.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d060d091ddeb4a18af8a7907ce4b88be').json()
    return response
  
if __name__ == "__main__":
    app.run(debug = True)