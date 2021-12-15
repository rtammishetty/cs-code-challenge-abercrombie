const baseUrl = 'https://615485ee2473940017efaed3.mockapi.io/assessment';
let source = $("#users-template").html();
let template = Handlebars.compile(source);


// // Using Fetch API
fetch(baseUrl)
    .then(response => response.json())
    .then(response => {
        for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let dataStamp = {
                name: data.name,
                avatar: data.avatar
            }
            let templates = template(dataStamp)
            $('.content-placeholder').append(templates);
        }
    });



// // Using jQuery
/*
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

function showData(datas) {
    for (let i = 0; i < datas.length; i++) {
        let data = datas[i];
        let dataStamp = {
            name: data.name,
            avatar: data.avatar
        }
        let templates = template(dataStamp)
        $('.content-placeholder').append(templates);
    }
}
*/