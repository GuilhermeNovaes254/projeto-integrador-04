const path = require("path");
const imagemController = {

    buscaImagem: async (req, res) => {
        let {nomeImagem} = req.params;

        let imagemDir = path.resolve('uploads', nomeImagem);
        res.sendFile(imagemDir);
      }


};

module.exports = imagemController;