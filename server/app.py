# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib.request
import json
from googlesearch import search

# Global variables
api_key = '?apikey=pub_21210c839808375b71b7c59167110c9e3ac44'
category = '&category='
country = '&country='
language = '&language='
api_domain = 'https://newsdata.io/api/1/news'

def get_website_url(website_name):
    # Search for the website using Google
    query = f"{website_name} taiwan"
    urls = list(search(query, num_results=10))

    # Look for the first URL that contains the website name
    for url in urls:
        if website_name in url:
            return url

    return None

def get_preview_image_url(url):
    # Set a user agent to make the request appear as if it is coming from a web browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
    
    # Request the URL and get the HTML content
    req = urllib.request.Request(url, headers=headers)
    html_content = urllib.request.urlopen(req).read()

    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the preview image URL in the meta tags
    preview_image = soup.find('meta', property='og:image')
    if preview_image:
        return preview_image['content']
    else:
        return None
    
def get_response_from_api(news_category):
    api_url = f'{api_domain}{api_key}{country}tw{language}zh'
    match news_category:
        case 'search':
            print()
        case 'headlines':
            api_url = api_url + f'{category}top'
        case 'business':
            api_url = api_url + f'{category}business'
        case 'entertainment':
            api_url = api_url + f'{category}entertainment'
        case 'environment':
            api_url = api_url + f'{category}environment'
        case 'food':
            api_url = api_url + f'{category}food'
        case 'health':
            api_url = api_url + f'{category}health'
        case 'politics':
            api_url = api_url + f'{category}politics'
        case 'science':
            api_url = api_url + f'{category}science'
        case 'sports':
            api_url = api_url + f'{category}sports'
        case 'technology':
            api_url = api_url + f'{category}technology'
        case 'tourism':
            api_url = api_url + f'{category}tourism'
        case 'world':
            api_url = api_url + f'{category}world'

    response = requests.get(api_url).text
    json_dict = json.loads(response)

    for news in json_dict['results']:
        # Set news.image_url in every returned news source
        news['image_url'] = get_preview_image_url(news['link'])
        # Set news.source_link in every returned news source
        # news['source_url'] = get_website_url(news['source_id'])
        # news['logo_url'] = 'https://logo.clearbit.com/' + news['source_url'] + '?size=600'

    return json_dictget_respopoliticsnse_from_api

# 初始化Flask
app = Flask(__name__)
CORS(app)

@app.route('/search+results', methods=['GET', 'POST'])
def search():
     return get_response_from_api('search')

@app.route('/headlines', methods=['GET'])
@app.route('/', methods=['GET'])
def headlines():
    return get_response_from_api('headlines')

@app.route('/business', methods=['GET'])
def business():
    return get_response_from_api('business')

@app.route('/entertainment', methods=['GET'])
def entertainment():
    return get_response_from_api('entertainment')

@app.route('/environment', methods=['GET'])
def entertainment():
    return get_response_from_api('environment')

@app.route('/food', methods=['GET'])
def food():
    return get_response_from_api('food')

@app.route('/health', methods=['GET'])
def food():
    return get_response_from_api('health')

@app.route('/politics', methods=['GET'])
def politics():
    return get_response_from_api('politics')

@app.route('/science', methods=['GET'])
def food():
    return get_response_from_api('science')

@app.route('/sports', methods=['GET'])
def food():
    return get_response_from_api('sports')

@app.route('/technology', methods=['GET'])
def food():
    return get_response_from_api('technology')

@app.route('/tourism', methods=['GET'])
def food():
    return get_response_from_api('tourism')

@app.route('/world', methods=['GET'])
def food():
    return get_response_from_api('world')


  
if __name__ == "__main__":
    app.run(debug = True)