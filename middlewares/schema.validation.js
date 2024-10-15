import Joi from 'joi';
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        image: Joi.string(),
        price: Joi.number().required(),
        city : Joi.string().required(),
        state : Joi.string().required(),
        country : Joi.string().required(),
    }).required(),
});