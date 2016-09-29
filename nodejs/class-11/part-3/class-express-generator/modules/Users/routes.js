'use strict';

module.exports = (Actions) => {

    const Routes = [
        {
            method: 'get'
            , path: '/'
            , action: Actions.list
        }
        , {
            method: 'get'
            , path: '/:id'
            , action: Actions.listById
        }
        , {
            method: 'post'
            , path: '/'
            , action: Actions.create
        }
        , {
            method: 'put'
            , path: '/:id'
            , action: Actions.update
        }
        , {
            method: 'delete'
            , path: '/:id'
            , action: Actions.delete
        }
        , {
            method: 'post'
            , path: '/forgot'
            , action: Actions.recover
        }
    ];

    return Routes;

};
