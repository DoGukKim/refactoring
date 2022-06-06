const organization = { name: "알랄라", country: "코리안" };

////////////////////////////////////

class Organization {
  constructor(data) {
    this.name = data.name;
    this.country = data.country;
  }

  set name(aString) {
    this.name = aString;
  }

  get name() {
    return this.name;
  }

  set country(aCountryCode) {
    this.country = aCountryCode;
  }

  get country() {
    return this.country;
  }
}

const newOrganization = new Organization({ name: "발할라", country: "라할발" });
