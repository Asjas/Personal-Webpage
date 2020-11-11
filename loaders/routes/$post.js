'use strict';
const { json } = require('@remix-run/loader');
const api = require('../../api/ghost');

let loader = async ({ params }) => {
  if (params.post === 'mockServiceWorker.js') return;
  const post = await api.posts.read({ slug: params.post });

  return json(post, {
    'cache-control': 'max-age=300',
  });
};

module.exports = loader;
