var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
  'article-one' : {
      title: "Article One | Jaskaran",
      heading: "Article One",
      date: "20/8/2017",
      content: `
                    <p>
                        This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one.
                    </p>
                    <p>
                        This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one.
                    </p>
                    <p>
                        This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one.
                    </p>`
    },
    
    'article-two' : {
      title: "Article Two | Jaskaran",
      heading: "Article Two",
      date: "20/8/2017",
      content: `
                    <p>
                        This is the content for article two. This is the content for article two. This is the content for article two. 
                    </p>
                    <p>
                        This is the content for article two. This is the content for article two. This is the content for article two. 
                    </p>`
    },
    
    'article-three' : {
      title: "Article Three | Jaskaran",
      heading: "Article Three",
      date: "19/8/2017",
      content: `
                    <p>
                        This is the content for article three. This is the content for article three. This is the content for article three. 
                    </p>
                    <p>
                        This is the content for article three. This is the content for article three. This is the content for article three. 
                    </p>`
    }
};

function getHtml(data){
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
            <a href='/'>Home></a>
            <hr/>
            <div>
                <h2>${heading}</h2>
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>`
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    articleName = req.param.articleName;
    res.send(getHtml(article[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
