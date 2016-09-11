'use strict';

module.exports = (Actions) => {

    const Routes = [
        {
            method: 'get'
            , path: '/'
            , action: Actions.list
        },
        {
            method: 'post'
            , path: '/'
            , action: Actions.create
        }
    ];

    return Routes;

};
