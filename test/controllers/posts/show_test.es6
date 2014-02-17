import PostsShowController from 'app/controllers/posts/show';

module('Unit - PostsShowController');

test('it exist', function(){
  expect(2);

  ok(PostsShowController);
  ok(PostsShowController.create() instanceof Ember.PostsShowController);
});
