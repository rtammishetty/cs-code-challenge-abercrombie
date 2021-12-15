// // Using jQuery
var baseUrl = 'https://615485ee2473940017efaed3.mockapi.io/assessment';
$.ajax({
    url: baseUrl,
    method: 'GET',
    success: function (data) {
        showData(data);
    },
    error: function () {
        alert('error');
    }
});

var source = $("#users-template").html();
var template = Handlebars.compile(source);
function showData(datas) {
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        var dataStamp = {
            name: data.name,
            avatar: data.avatar
        }
        var templates = template(dataStamp)
        $('.content-placeholder').append(templates);
    }
}
