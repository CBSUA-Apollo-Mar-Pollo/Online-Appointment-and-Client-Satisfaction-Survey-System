import Parse from "parse";

const COVIDFORM = Parse.Object.extend("Covid19Form");

var covidForm = {
  save(args = {}) {
    const { symptoms, past15days, PositiveContact, travelAbroad, emailAdd , office } =
      args;

    const object = new COVIDFORM();
    object.set("symptoms", symptoms);
    object.set("past15days", past15days);
    object.set("PositiveContact", PositiveContact);
    object.set("travelAbroad", travelAbroad);
    object.set("emailAdd", emailAdd);
    object.set("office", office);
    return object.save();
  },
};

export { covidForm };
