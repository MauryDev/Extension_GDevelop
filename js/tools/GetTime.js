var request,_key,_gameid;
function GetTime(callback) {
    request({
        url: "/time/",
        _key: _key,
        param: [
            ["game_id", _gameid]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return GetTime;
};