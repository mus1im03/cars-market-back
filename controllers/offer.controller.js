const Offer = require("../models/Offer.model");

const isValidPhoneNumber = (phoneNumber) => {
  const phonePattern = /^8\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  return phonePattern.test(phoneNumber);
};

module.exports.offersController = {
  getOffers: async (req, res) => {
    try {
      const offers = await Offer.find();
      res.json(offers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  },

  postOffer: async (req, res) => {
    try {
      const { name, surname, phone } = req.body;

      if (!isValidPhoneNumber(phone)) {
        return res.status(400).json({ error: 'Неверный формат номера телефона' });
      }

      const newOffer = await Offer.create({ name, surname, phone });

      return res.status(201).send(newOffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' + ' ' + error.message });
    }
  },
};