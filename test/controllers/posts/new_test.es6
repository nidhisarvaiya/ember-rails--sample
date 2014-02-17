import PostsNewController from 'app/controllers/posts/new';

module('Unit - PostsNewController');

test('it exist', function(){
  expect(2);

  ok(PostsNewController);
  ok(PostsNewController.create() instanceof Ember.PostsNewController);
});
