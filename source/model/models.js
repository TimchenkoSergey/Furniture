import mongoose from './dbInit';

//importing mongoose schemas
import SocialWebLinkSchema from './schemes/socialWebLink';
import MenuItemSchema      from './schemes/menu';
import AwardSchema         from './schemes/award';
import EmployeeSchema      from './schemes/employee';
import NewsSchema          from './schemes/news';
import ProductSchema       from './schemes/product';

const models = {
    SocialWebLink : mongoose.model('SocialWebLink', SocialWebLinkSchema),
    MenuItem      : mongoose.model('MenuItem', MenuItemSchema),
    Award         : mongoose.model('Award', AwardSchema),
    Employee      : mongoose.model('Employee', EmployeeSchema),
    News          : mongoose.model('News', NewsSchema),
    Product       : mongoose.model('Product', ProductSchema)
};

export default models;