'use strict';

const Blog = require('./schema-getter');
const util = require('util');
const expect = require('chai').expect;

describe('BlogPostSchema', () => {
    const title = 'nodejs power of c++ and v8';

    before(done=> {
        Blog.create({
            title: title
        }).then(blog=> {
            util.log(blog);
            done(); // async
        });
    });

    after(done=> {
        Blog.remove({title: title})
            .then(deleted=> {
                util.log(deleted.result);
                done();
            });
    });

    describe('testing getters', ()=> {
        it('title shown as upperCased', ()=> {
            Blog.findOne({title: title})
                .then(blog => {
                    util.log(blog.title);
                    expect(blog.title).to.be.equal(title.toUpperCase());
                });
        });
    });
});
