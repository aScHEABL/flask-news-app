const cbsNews = ['CBS', 'CBS Sports'];
const todayNews = ['USA Today', 'Florida Today'];

export const newsIcon = {
    // 'CBS Sports': 'https://creativereview.imgix.net/content/uploads/2011/03/Page254_Eye_solid.jpg',
    ...Object.fromEntries(
        cbsNews.map((key) => [key, 'https://creativereview.imgix.net/content/uploads/2011/03/Page254_Eye_solid.jpg'])
    ),
    ...Object.fromEntries(
        todayNews.map((key) => [key, 'https://mir-s3-cdn-cf.behance.net/projects/404/cc930674259153.Y3JvcCwzMzkyLDI2NTMsMTM0LDI1MQ.png'])
    ),
    'CNN': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png',
    'The Washington Post': 'https://s3.amazonaws.com/arc-authors/washpost/256e702d-7557-4a12-a78f-a66f571c2e16.png',
    'BBC News': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/1000px-BBC_Logo_2021.svg.png',
    'TVLine': 'data:image/png;base64,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',
    'The Athletic': 'https://seeklogo.com/images/T/the-athletic-logo-64248C7A94-seeklogo.com.png',
    "Investor's Business Daily": 'https://yt3.googleusercontent.com/ytc/AGIKgqOxsvXG_ndKTFk2_qOJZe9qhh7fl5EkEAo_a4U27x4=s900-c-k-c0x00ffffff-no-rj',
    'Fox News': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/2048px-Fox_News_Channel_logo.svg.png',
    'YouTube': 'https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png',
    'Reuters': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Reuters_Logo.svg/1280px-Reuters_Logo.svg.png',
    
}