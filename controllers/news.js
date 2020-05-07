const News = require('../models/News');

module.exports.getNewsList = (req, res) => {
    News.findAll({}).then(lessons => {
        res.status(200).json(lessons);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при получении списка новостей."
        })
    })
};
module.exports.getNews = async (req, res) => {
    News.findOne({
        where: {id: req.params.id}
    }).then((news) => res.status(200).json({
        title: news.title,
        createdBy: news.createdBy,
        createdAt: news.createdAt,
        text: news.text,
        videoUrl: news.videoUrl
    })).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при получении новостей"
        })
    });
};

module.exports.addNews = async (req, res) => {
    News.create({
        title: req.body.title,
        createdBy: req.user.fullName,
        createdAt: req.body.createdAt,
        text: req.body.text,
        videoUrl: req.body.videoUrl
    }).then(news => res.status(201).json({
        message: "Новость добавлена",
        news: news
    })).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при добавлении новости"
        })
    });
};

module.exports.deleteNews = async (req, res) => {
    News.destroy({where: {id: req.params.id}})
        .then(deleted => deleted ? res.status(204).json({
            message: "Новость удалена"
        }) : res.status(500).json({message: "Ошибка при удалении новости"}))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Ошибка при удалении новости'
            })
        })
};


module.exports.updateNews = async (req, res) => {
    let updatedFields = {};

    if (req.body.title) {
        updatedFields.title = req.body.title;
    }

    if (req.body.createdBy) {
        updatedFields.createdBy = req.body.createdBy;
    }

    if (req.body.createdAt) {
        updatedFields.createdAt = req.body.createdAt;
    }

    if (req.body.text) {
        updatedFields.text = req.body.text;
    }
    if (req.body.videoUrl) {
        updatedFields.videoUrl = req.body.videoUrl;
    }

    let news = await News.findOne({
        where: {id: req.params.id}
    });

    news.update(updatedFields).then(updatedCourse => {
        res.status(200)
            .json(updatedCourse)
    })
        .catch(e => {
            console.error(e.message);
            res.status(500).json(e.message)
        });
};
