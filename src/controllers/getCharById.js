const axios = require("axios");

module.exports.getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const URL = `https://rym2.up.railway.app/api/character/${charId}?key=pi-castronicolas`;

    const response = await axios.get(URL);

    const { id, name, gender, species, origin, image, status } = response.data;
    const character = { id, name, gender, species, origin, image, status };

    if (character.id) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
