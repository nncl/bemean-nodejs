/**
 * Action that gets querystring through URL
 */

const Action = (_url) => {
    const url_parts = url.parse(_url);
    return querystring.parse(url_parts.query);
};

module.exports = Action;