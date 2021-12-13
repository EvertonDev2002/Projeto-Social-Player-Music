const knex = require("../database");
module.exports = {
  async index(req, res) {
    const data = await knex("tb_infor").select("*");
    return res.json(data);
  },
  async create(req, res, next) {
    try {
      const {
        alternativa_01,
        alternativa_02,
        alternativa_03,
        alternativa_04,
        photo,
        question,
        feedback,
      } = req.body;

      await knex("tb_infor").insert({
        alternativa_01,
        alternativa_02,
        alternativa_03,
        alternativa_04,
        photo,
        question,
        feedback,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { page = 1 } = req.params;

      const data = await knex("tb_infor")
        .select("*")
        .limit(1)
        .offset((page - 1) * 1);

      const total = await knex("tb_infor").count("id");

      return res.json({ data, total });
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;

      const {
        alternativa_01,
        alternativa_02,
        alternativa_03,
        alternativa_04,
        photo,
        question,
        feedback,
      } = req.body;

      if (alternativa_01) {
        await knex("tb_infor").update({ alternativa_01 }).where({ id });
      } else if (alternativa_02) {
        await knex("tb_infor").update({ alternativa_02 }).where({ id });
      } else if (alternativa_03) {
        await knex("tb_infor").update({ alternativa_03 }).where({ id });
      } else if (alternativa_03) {
        await knex("tb_infor").update({ alternativa_03 }).where({ id });
      } else if (alternativa_04) {
        await knex("tb_infor").update({ alternativa_04 }).where({ id });
      } else if (photo) {
        await knex("tb_infor").update({ photo }).where({ id });
      } else if (question) {
        await knex("tb_infor").update({ question }).where({ id });
      } else if (feedback) {
        await knex("tb_infor").update({ feedback }).where({ id });
      }

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async updateAll(req, res, next) {
    try {
      const { id } = req.params;

      const {
        alternativa_01,
        alternativa_02,
        alternativa_03,
        alternativa_04,
        photo,
        question,
        feedback,
      } = req.body;

      await knex("tb_infor")
        .update({
          alternativa_01,
          alternativa_02,
          alternativa_03,
          alternativa_04,
          photo,
          question,
          feedback,
        })
        .where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("tb_infor").where({ id }).del();
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
