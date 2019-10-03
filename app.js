// Будемо робити сервіс потаналогії до ЛУН.
//     Задача на сьогодні:
//     Зробити сервер на http.
//     На сервері має бути 4 доступні урли.
// / -> домашня сторінка
// /login -> відмальовує формочку з мейлом та паролем
// /register -> фориа реєстрації. Мейл,  імя пароль, фотка, місто
// /not-found -> відиальвує сторінку 404 при некоректному вводі URL

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let urlWithStringQuery = url.parse(req.url);
    switch (urlWithStringQuery.pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                res.end(data)
            });
            break;

        case '/register':
            fs.readFile('./register.html', (err, data) => {
                res.end(data)
            });
            break;

        default:
            fs.readFile('./404.html', (err, data) => {
                res.end(data)
            });
            break;
    }
});
server.listen(5465, (err)=> {
    if(err){
        console.log('error');
    }
    else
    {
        console.log('ok');
    }
});