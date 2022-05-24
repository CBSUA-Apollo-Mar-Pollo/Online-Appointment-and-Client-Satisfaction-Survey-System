import Parse from "parse";

const CSS = Parse.Object.extend("CSS");

var css = {
  save(args = {}) {
    const { pickedNo1,
        pickedNo2,
        pickedNo3,
        pickedNo4,
        pickedNo5,
        comment , emailAdd } =
      args;

    const object = new CSS();
    object.set("pickedNo1", pickedNo1);
    object.set("pickedNo2", pickedNo2);
    object.set("pickedNo3", pickedNo3);
    object.set("pickedNo4", pickedNo4);
    object.set("pickedNo5", pickedNo5);
    object.set("comment", comment);
    object.set("emailAdd", emailAdd);
    return object.save();
  },
};

export { css };
