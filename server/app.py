# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib.request
import json
from googlesearch import search

def get_website_url(website_name):
    # Search for the website using Google
    query = f"{website_name} taiwan"
    urls = list(search(query, num_results=10))

    # Look for the first URL that contains the website name
    for url in urls:
        if website_name in url:
            return url

    return None

def extract_preview_image_url(url):
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

# 初始化Flask
app = Flask(__name__)
CORS(app)

api_key = '?apikey=pub_21210c839808375b71b7c59167110c9e3ac44'
country = '&country='
language = '&language='
api_url = 'https://newsdata.io/api/1/news'

headlines_tw = f'{api_url}{api_key}{country}tw{language}zh'

@app.route('/headlines', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def headlines():
    response = requests.get(headlines_tw)
    text = response.text
    json_dict = json.loads(text)

    for news in json_dict['results']:
        # Set news.image_url in every returned news source
        news['image_url'] = extract_preview_image_url(news['link'])
        # Set news.source_link in every returned news source
        news['source_url'] = get_website_url(news['source_id'])
        news['logo_url'] = 'https://logo.clearbit.com/' + news['source_url'] + '?size=600'
    
    return json_dict
  
if __name__ == "__main__":
    app.run(debug = True)