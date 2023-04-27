# 匯入相關套件
import requests
from flask import Flask, render_template
from flask_cors import CORS

# 初始化Flask
app = Flask(__name__)
CORS(app)

source_list = ['ettoday', ]

api_key = '?apikey=pub_21210c839808375b71b7c59167110c9e3ac44'
country = '&country='
language = '&language='
domain = '&domain='
api_url = 'https://newsdata.io/api/1/news'

headlines_tw = f'{api_url}{api_key}{country}tw{language}zh{domain}'

@app.route('/headlines', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def headlines():
    response = requests.get(headlines_tw).json()
    return response
  
if __name__ == "__main__":
    app.run(debug = True)