# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
import feedparser
import json

# Global variables
def extract_news(category):
    google_news_domain = 'https://news.google.com/rss/topics/'
    lang_region = '?hl=zh-TW&gl=TW&ceid=TW:zh-Hant'
    category_id = {
        'nation': 'CAAqJQgKIh9DQkFTRVFvSUwyMHZNRFptTXpJU0JYcG9MVlJYS0FBUAE',
        'global': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNRGx1YlY4U0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'region': 'CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE',
        'business': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNRGx6TVdZU0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'technology': 'CAAqLAgKIiZDQkFTRmdvSkwyMHZNR1ptZHpWbUVnVjZhQzFVVnhvQ1ZGY29BQVAB',
        'entertainment': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNREpxYW5RU0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'sports': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'health': 'CAAqJQgKIh9DQkFTRVFvSUwyMHZNR3QwTlRFU0JYcG9MVlJYS0FBUAE'
    }
    rss_url = ''
    if category == 'top':
        rss_url = f'https://news.google.com/rss{lang_region}'
    else:
        rss_url = f'{google_news_domain}{category_id[category]}{lang_region}'

    rss_feed = feedparser.parse(rss_url)
    json_data = json.dumps(rss_feed.entries)
    return json_data




# 初始化Flask
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
@app.route('/top', methods=['GET'])
def top():
    return extract_news('top')

@app.route('/<news_category>')
def display_news(news_category):
    return extract_news(news_category)
  
if __name__ == "__main__":
    app.run(debug = True)