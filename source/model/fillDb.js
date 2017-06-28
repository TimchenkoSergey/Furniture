import model from './model';
import models from './models';

export default fillDb;

const info = {
    awards : [
        { name : 'Aenean ullamcorper', link : '/' },
        { name : 'porta nisl', link : '/' },
        { name : 'ac lobortis elit', link : '/' },
        { name : 'commodo placerat', link : '/' },
        { name : 'Vivamus', link : '/' },
        { name : 'Aenean ullamcorper', link : '/' },
        { name : 'porta nisl', link : '/' },
        { name : 'ac lobortis elit', link : '/' },
        { name : 'commodo placerat', link : '/' },
        { name : 'Vivamus', link : '/' }
    ],
    employee : [
        {
            name : 'philippe',
            lastName : 'starck',
            position : 'designer',
            photo : '/public/img/philippe-starck.png',
            links : [
                { icon : 'fa-facebook', link : '/' },
                { icon : 'fa-twitter', link : '/' },
                { icon : 'fa-linkedin', link : '/' }
            ]
        },
        {
            name : 'mario',
            lastName : 'bellini',
            position : 'designer',
            photo : '/public/img/mario-bellini.png',
            links : [
                { icon : 'fa-facebook', link : '/' },
                { icon : 'fa-twitter', link : '/' },
                { icon : 'fa-linkedin', link : '/' }
            ]
        },
        {
            name : 'patricia',
            lastName : 'urquiola',
            position : 'designer',
            photo : '/public/img/patricia-urquiola.png',
            links : [
                { icon : 'fa-facebook', link : '/' },
                { icon : 'fa-twitter', link : '/' },
                { icon : 'fa-linkedin', link : '/' }
            ]
        }
    ],
    menu : [
        { text : 'Продукты', link : '/product-list' },
        { text : 'Новости', link : '/news-list' },
        { text : 'О нас', link : '/about-us' },
        { text : 'Корзина', link : '/basket' },
        { text : 'Заказ', link : '/order' }
    ],
    news : [
        {
            title : 'Mauris et dui sed justo placerat tristique.',
            date : new Date(),
            mainImgSrc : '/public/img/news1.png',
            text : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt'
            ]
        },
        {
            title : 'Proin vehicula nibh massa.',
            date : new Date(),
            mainImgSrc : '/public/img/news2.png',
            text : [
                'Praesent non mauris nec orci scelerisque faucibus. Nulla ac varius est. Aenean auctor nisl elit, nec sollicitudin lectus iaculis sed. Maecenas aliquam ligula vitae pharetra scelerisque.',
                'Praesent non mauris nec orci scelerisque faucibus. Nulla ac varius est. Aenean auctor nisl elit, nec sollicitudin lectus iaculis sed. Maecenas aliquam ligula vitae pharetra scelerisque.',
                'Praesent non mauris nec orci scelerisque faucibus. Nulla ac varius est. Aenean auctor nisl elit, nec sollicitudin lectus iaculis sed. Maecenas aliquam ligula vitae pharetra scelerisque.'
            ]
        }
    ],
    products : [
        {
            name        : 'FONDUE',
            year        : 2014,
            mainImgSrc  : '/public/img/product1.png',
            material    : 'Glass and Metal',
            type        : 'Suspension lamp',
            designer    : 'David Design',
            price       : 120,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : 'tabano',
            year        : 2016,
            material    : 'B&B ITALIA',
            mainImgSrc  : '/public/img/product3.png',
            type        : 'Armchairs',
            designer    : 'PATRICIA URQUIOLA',
            price       : 230,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name: 'louis xx',
            year: 2017,
            material: 'metal, plastic',
            mainImgSrc: '/public/img/product4.png',
            type: 'chairs',
            designer: 'philippe starck',
            price       : 1230,
            description: [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : '395-396 P22',
            year        : 2012,
            material    : 'skin',
            mainImgSrc  : '/public/img/product5.png',
            type        : 'ARMchairs',
            designer    : 'Patrick Norguet',
            price       : 340,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : 'potter',
            year        : 2011,
            mainImgSrc  : '/public/img/product2.png',
            type        : 'potter',
            material    : 'plastic',
            designer    : 'David Design',
            price       : 140,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : 'FIJI',
            year        : 2015,
            material    : 'skin',
            mainImgSrc  : '/public/img/product6.png',
            type        : 'armchairs',
            designer    : 'Cuno Frommherz',
            price       : 240,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : 'Sesann',
            year        : 2016,
            material    : 'skin',
            mainImgSrc  : '/public/img/product7.png',
            type        : 'armchairs',
            designer    : 'Gianfranco Frattini',
            price       : 450,
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        },
        {
            name        : 'Alessi',
            year        : 2017,
            material    : 'metal',
            mainImgSrc  : '/public/img/product8.png',
            type        : 'Alessi',
            price       : 340,
            designer    : 'Piero Lissoni',
            description : [
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. ',
                'Maecenas imperdiet nisi lorem, sed fermentum tortor pretium eget. Sed mollis lacus quis nunc cursus cursus. Quisque et magna sit amet sapien fermentum scelerisque eu id massa. Mauris ornare massa vel mauris tempus, vitae tempus urna tincidunt. '
            ]
        }
    ]
};

async function fillDb() {
    //let promises = [];
    /*for (let i = 0; i < info.awards.length; i++) {
        promises.push(model.create(models.Award, info.awards[i]));
    }*/

    /*for (let i = 0; i < info.employee.length; i++) {
        promises.push(model.create(models.Employee, info.employee[i]));
    }*/

    /*for (let i = 0; i < info.menu.length; i++) {
        await model.create(models.MenuItem, info.menu[i]);
    }*/

    /*for (let i = 0; i < info.news.length; i++) {
        promises.push(model.create(models.News, info.news[i]));
    }*/

    for (let i = 0; i < info.products.length; i++) {
        await model.create(models.Product, info.products[i]);
    }

    //return Promise.all(promises);
}