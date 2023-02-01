const { default: mongoose} = require("mongoose");
const { Schema } = mongoose

const productSchema = Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now()}
})

const product = mongoose.model('Products',productSchema)

module.exports = {
    product
}
