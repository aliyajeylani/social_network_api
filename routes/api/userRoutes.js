const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  RemoveUserFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addUserFriend);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friends/:friendId').delete(RemoveUserFriend);

module.exports = router;
