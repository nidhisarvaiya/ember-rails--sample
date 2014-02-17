import PostsEditController from 'app/controllers/posts/edit';

module('Unit - PostsEditController');

test('it exist', function(){
  expect(2);

  ok(PostsEditController);
  ok(PostsEditController.create() instanceof Ember.PostsEditController);
});
