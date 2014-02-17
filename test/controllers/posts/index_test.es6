import PostsIndexController from 'app/controllers/posts/index';

module('Unit - PostsIndexController');

test('it exist', function(){
  expect(2);

  ok(PostsIndexController);
  ok(PostsIndexController.create() instanceof Ember.PostsIndexController);
});
