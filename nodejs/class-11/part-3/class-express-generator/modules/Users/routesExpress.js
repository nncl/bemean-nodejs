'use strict';

module.exports = (Routes, router) => {
    Routes.forEach((route)=> {
        router[route.method](route.path, route.action);
    });

    return router;
};
