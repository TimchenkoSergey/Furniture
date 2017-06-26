import mainPage from '../controlers/mainPage';
import menu     from '../controlers/menu';
import awards   from '../controlers/awards';
import employee from '../controlers/employee';
import news     from '../controlers/news';
import product  from '../controlers/product';

export default registrationRouts;

async function registrationRouts(app) {
    app.get('/',            mainPage);
    app.get('/menu',        menu);
    app.get('/awards',      awards);
    app.get('/employee',    employee);
    app.get('/news',        news.newsController);
    app.get('/news/:id',    news.newsByIdController);
    app.get('/product',     product.productController);
    app.get('/product/:id', product.productByIdController);
}