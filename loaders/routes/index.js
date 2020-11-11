'use strict';
const { json } = require('@remix-run/loader');
const api = require('../../api/ghost');

let loader = async () => {
  const posts = await api.posts.browse({ include: 'tags,authors' });

  return json(posts, {
    'cache-control': 'max-age=300',
  });
};

module.exports = loader;
