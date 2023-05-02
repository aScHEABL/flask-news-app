# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib.request
from urllib.parse import urlparse
import json

# 初始化Flask，並且允許Cross-Origin Resource Sharing
app = Flask(__name__)
CORS(app)

# Set a user agent to make the request appear as if it is coming from a web browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

# Questionable code, deprecrated
def get_news_provider_name(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    return soup.find('meta', property='og:site_name')['content']

def get_news_provider(url):
    domain = urlparse(url).netloc
    news_provider_url = f'https://{domain}'
    return news_provider_url


def get_redirect_url(url):
    redirect =  requests.get(url)
    return redirect.url

def get_preview_image_url(url):
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

def fetch_data_from_api(news_category):
    api_domain = 'https://newsapi.org/v2/top-headlines'
    api_key = 'd060d091ddeb4a18af8a7907ce4b88be'
    country_code = 'tw'
    api_url = f'{api_domain}?apiKey={api_key}&country={country_code}&category={news_category}'

    response = requests.get(api_url).text
    json_dict = json.loads(response)

    for news in json_dict['articles']:
        news['url'] = get_redirect_url(news['url'])
        news['urlToImage'] = get_preview_image_url(news['url'])
        news['news_provider_url'] = get_news_provider(news['url'])
        news['news_provider_logo'] = 'https://logo.clearbit.com/' + news['news_provider_url'] + '?size=600'
        # Questionable code, deprecrated
        # news['provider_name'] = get_news_provider_name(news['url'])

    return json_dict





@app.route('/general', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    # 主程式
    return fetch_data_from_api('general')

@app.route('/<news_category>')
def display_other_news_category(news_category):
    return fetch_data_from_api(news_category)

if __name__ == "__main__":
    # app.run(debug = True)
    app.run(host='0.0.0.0', port=5000, threaded=False, processes=50)