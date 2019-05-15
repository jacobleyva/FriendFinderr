const { getOne }

module.exports = app => {
    //grab a friend
    app.get('../app/data/matches.js', (req, res) => {
        getOne(req.params.t)
        .then(matches => res.json(matches))
        .catch(e => console.log(e))
    })
}