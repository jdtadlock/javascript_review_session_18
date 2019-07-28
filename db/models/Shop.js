const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let ShopSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Shop name must be unique.']
    },
    coffees: [{ type: Schema.Types.ObjectId, ref: 'Coffee' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

ShopSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

ShopSchema.pre('update', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

ShopSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});



/** @name db.Shop */
module.exports = mongoose.model('Shop', ShopSchema);
