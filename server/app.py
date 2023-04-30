# 匯入相關套件
import requests
from flask import Flask
from flask_cors import CORS
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
        'sci_tech': 'CAAqLAgKIiZDQkFTRmdvSkwyMHZNR1ptZHpWbUVnVjZhQzFVVnhvQ1ZGY29BQVAB',
        'entertainment': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNREpxYW5RU0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'sports': 'CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JYcG9MVlJYR2dKVVZ5Z0FQAQ',
        'health'
    }
    news_url = ''
    if category == 'top':
        news_url = f'https://news.google.com/rss{lang_region}'
    else:
        news_url = f'{google_news_domain}{category_id[category]}{lang_region}'

    return news_url




# 初始化Flask
app = Flask(__name__)
CORS(app)



  
if __name__ == "__main__":
    app.run(debug = True)