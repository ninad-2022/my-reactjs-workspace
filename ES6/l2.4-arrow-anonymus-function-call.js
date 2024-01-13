const person = {
  name: "Ninad",
  mobile: 3788972438,
  city: "Pune",
  profile: function () {
    //below function refers the context from where it call.
    //it gives undefined
    return function () {
      console.log("Name: ", this.name);
    };

    //below function refers the context from where it created.
    //it gives value
    // return () => {
    //   console.log("Name: ", this.name);
    // };
  },
};

const inner = person.profile();
inner();
