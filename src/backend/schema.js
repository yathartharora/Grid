import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

var detail = new Schema({
  name: {
    type: String
  },
  email: {
    type: Number
  },

  pass: {
    type: String
  },
  passconf: {
      type: String
  }
});

export default model("detail", detail);