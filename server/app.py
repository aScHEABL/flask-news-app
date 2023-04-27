# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib.request
import json

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

# source_list = ['ettoday', ]

api_key = '?apikey=pub_21210c839808375b71b7c59167110c9e3ac44'
country = '&country='
language = '&language='
# domain = '&domain='
api_url = 'https://newsdata.io/api/1/news'

headlines_tw = f'{api_url}{api_key}{country}tw{language}zh'

@app.route('/headlines', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def headlines():
    response = requests.get(headlines_tw)
    text = response.text
    json_dict = json.loads(text)

    for news in json_dict['results']:
        news['image_url'] = extract_preview_image_url(news['link'])
    
    return json_dict
  
if __name__ == "__main__":
    app.run(debug = True)