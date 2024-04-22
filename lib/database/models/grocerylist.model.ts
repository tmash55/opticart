import { Document, Schema, model, models } from "mongoose";

export interface IGroceryList extends Document {
  title: string;
  createdAt: Date;
  creator: { _id: string; firstName: string; lastName: string };
  products: IProduct[];
}
export interface IProduct extends Document {
  name: string;
  quantity: number;
  prices: { retailer: string; price: number }[];
}
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  prices: [
    {
      retailer: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const GroceryListSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  products: [ProductSchema],
});

const GroceryList =
  models.GroceryList || model("GroceryList", GroceryListSchema);

export default GroceryList;
