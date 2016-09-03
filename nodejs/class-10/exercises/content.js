var Content = (req, res) => {
    res.set({'Content-Type': 'text/html'});
    res.send(new Buffer('<h1>Big DOG</h1>'));
};

module.exports = Content;
