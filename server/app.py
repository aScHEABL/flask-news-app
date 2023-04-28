# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib.request
import json

# Global variables
api_key = '?apikey=f09453350077ccf707171c573c8b0ec0'
category = '&category='
country = '&country='
language = '&lang='
api_domain = 'https://gnews.io/api/v4/top-headlines'
    
def get_response_from_api(news_category):
    api_url = f'{api_domain}{api_key}{country}tw{language}zh'
    match news_category:
        case 'search':
            print()
        case 'general':
            api_url = api_url + f'{category}general'
        case 'world':
            api_url = api_url + f'{category}world'
        case 'nation':
            api_url = api_url + f'{category}nation'
        case 'business':
            api_url = api_url + f'{category}business'
        case 'technology':
            api_url = api_url + f'{category}technology'
        case 'entertainment':
            api_url = api_url + f'{category}entertainment'
        case 'sports':
            api_url = api_url + f'{category}sports'
        case 'science':
            api_url = api_url + f'{category}science'
        case 'health':
            api_url = api_url + f'{category}health'

    response = requests.get(api_url).text
    json_dict = json.loads(response)

    for news in json_dict['articles']:
        news['logo_url'] = 'https://logo.clearbit.com/' + news['source']['url'] + '?size=600'

    return json_dict

# 初始化Flask
app = Flask(__name__)
CORS(app)

@app.route('/search+results', methods=['GET', 'POST'])
def search():
     return get_response_from_api('search')

@app.route('/general', methods=['GET'])
@app.route('/', methods=['GET'])
def general():
    return get_response_from_api('general')

@app.route('/world', methods=['GET'])
def world():
    return get_response_from_api('world')

@app.route('/nation', methods=['GET'])
def nation():
    return get_response_from_api('nation')

@app.route('/business', methods=['GET'])
def business():
    return get_response_from_api('business')

@app.route('/technology', methods=['GET'])
def technology():
    return get_response_from_api('technology')

@app.route('/entertainment', methods=['GET'])
def entertainment():
    return get_response_from_api('entertainment')

@app.route('/sports', methods=['GET'])
def sports():
    return get_response_from_api('sports')

@app.route('/science', methods=['GET'])
def science():
    return get_response_from_api('science')

@app.route('/health', methods=['GET'])
def health():
    return get_response_from_api('health')

  
if __name__ == "__main__":
    app.run(debug = True)