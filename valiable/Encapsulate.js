// let defaultOwner = { firstName: "kim", lastName: "Guk" };
// spaceship.owner = defaultOwner;
// defaultOwner = { firstName: "ha", lastName: "rim" };

////////////////////////////////////

// let defaultOwnerData = { firstName: "kim", lastName: "Guk" };
// export const defaultOwner = () => defaultOwnerData;
// export const setDefaultOwner = (arg) => (defaultOwner = arg);

// 그러나 값을 변경할 수 있기에 캡슐화가 필요.
// const changeLastName = defaultOwner();
// changeLastName.lastName = "mo";

// 변수의 값을 캡슐화 하기 (복제를 통한 원본 유지)

// let defaultOwnerData = { firstName: "kim", lastName: "Guk" };
// export const defaultOwner = () => Object.assign({}, defaultOwner);
// export const setDefaultOwner = (arg) => (defaultOwner = arg);

// 클래스로 레코드 캡슐화 하기
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
