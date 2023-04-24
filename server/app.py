# 匯入相關套件
import requests
from flask import Flask, render_template
from newsapi import NewsApiClient
from flask_cors import CORS

# 初始化Flask
app = Flask(__name__)
CORS(app)
  
# 初始化API 
api = NewsApiClient(api_key='d060d091ddeb4a18af8a7907ce4b88be')
  

@app.route('/defaultView', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    # 主程式
    response = requests.get('https://newsapi.org/v2/top-headlines?country=tw&apiKey=d060d091ddeb4a18af8a7907ce4b88be').json()
    return response
  
if __name__ == "__main__":
    app.run(debug = True)