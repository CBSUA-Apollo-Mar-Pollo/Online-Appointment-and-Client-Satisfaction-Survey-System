import Parse from "parse";

const Test = Parse.Object.extend("test");

var test = {
  save(args = {}) {
    const {
      fName,
      lName,
      emailAdd,
      contactNum,
      AffliationOfClient,
      reasonOfVisit,
      date,
      time,
      comments,
      referenceNum,
      selectOffice,
      status
    } = args;

    const object = new Test();
    object.set("fName", fName);
    object.set("lName", lName);
    object.set("emailAdd", emailAdd);
    object.set("contactNum", contactNum);
    object.set("AffliationOfClient", AffliationOfClient);
    object.set("selectOffice", selectOffice);
    object.set("reasonOfVisit", reasonOfVisit);
    object.set("date", date);
    object.set("time", time);
    object.set("comments", comments);
    object.set("referenceNum", referenceNum);
    object.set("status", status);
    return object.save();
  },
};

export { test };
