const CategoryService = require("../services/CategoryService");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required!",
      });
    }
    const response = await CategoryService.createCategory(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const data = req.body;
    if (!categoryId) {
      return res.status(200).json({
        status: "ERR",
        message: "The categoryId is required!",
      });
    }
    const response = await CategoryService.updateCategory(categoryId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res.status(200).json({
        status: "ERR",
        message: "The categoryId is required!",
      });
    }
    const response = await CategoryService.deleteCategory(categoryId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getAllCategory = async (req, res) => {
  try {
    const response = await CategoryService.getAllCategory();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getCategoryDetail = async (req, res) => {
  try {
    const categoryId = req.params.id
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required!'
            })
        }
        const response = await CategoryService.getDetailCategory(categoryId)
        return res.status(200).json(response)
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteMany = async (req, res) => {
  try {
      const ids = req.body.ids
      if (!ids) {
          return res.status(200).json({
              status: 'ERR',
              message: 'The ids is required!'
          })
      }
      const response = await CategoryService.deleteManyCategory(ids)
      return res.status(200).json(response)
  } catch (e) {
      return res.status(404).json({
          message: e
      })
  }
}

module.exports = { createCategory, updateCategory, deleteCategory, getAllCategory, getCategoryDetail, deleteMany };
