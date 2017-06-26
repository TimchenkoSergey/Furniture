import mainPage from '../controlers/mainPage';

export default registrationRouts;

async function registrationRouts(app) {
    app.get('/', mainPage);
}