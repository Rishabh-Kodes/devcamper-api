const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @description     Get all users
// @route           GET /api/v1/users
// @access          Private/Amdin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @description     Get single user
// @route           GET /api/v1/users/:id
// @access          Private/Amdin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @description     Create User
// @route           POST /api/v1/users
// @access          Private/Amdin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @description     Update User
// @route           PUT /api/v1/users/:id
// @access          Private/Amdin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @description     Delete User
// @route           DELETE /api/v1/users/:id
// @access          Private/Amdin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    data: {},
  });
});
