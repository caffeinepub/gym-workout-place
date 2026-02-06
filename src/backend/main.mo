import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    name : Text;
    contact : Text; // Can be email or phone
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, contact : Text, message : Text) : async () {
    let newSubmission : ContactSubmission = {
      name;
      contact;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };

  // Business info static query methods
  public query ({ caller }) func getPhoneNumber() : async Text {
    "+49 163 5029983";
  };

  public query ({ caller }) func getAddress() : async Text {
    "Gottschedstraße 26\nAACHEN 52064\nNRW";
  };

  public query ({ caller }) func getOpeningHours() : async Text {
    "Monday - Saturday: 11:00 - 21:00\nSunday: 16:00 - 21:00";
  };

  public shared ({ caller }) func initiateWhatsApp(number : Text) : async () {
    Runtime.trap("Functionality handled frontend-side");
  };

  public shared ({ caller }) func callNow(number : Text) : async () {
    Runtime.trap("Functionality handled frontend-side");
  };

  public shared ({ caller }) func openGoogleMaps(location : Text) : async () {
    Runtime.trap("Functionality handled frontend-side");
  };
};
