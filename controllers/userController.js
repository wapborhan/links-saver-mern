const Users = require("../models/Users");

exports.createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const postData = new Users(userData);

    const existingUser = await Users.findOne({ email: userData.email });

    if (!existingUser) {
      const result = await postData.save();

      res.status(200).json({
        success: true,
        status: 200,
        message: "User Created Successfully.",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        status: 200,
        message: "User ALready Registared.",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    const data = await Users.find({});
    console.log(data);
    res.status(200).json({
      success: true,
      status: 200,
      message: "Users Found",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};

exports.getUserByUsername = async (req, res, next) => {
  const username = req.params.username;
  try {
    const user = await Users.find({ username: username });

    res.status(200).json({
      success: true,
      status: 200,
      message: "User Found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};
