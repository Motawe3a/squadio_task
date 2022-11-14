export interface Iuser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Iaddress,
  company: Icompany,
}

interface Iaddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Igeo,
}

interface Igeo {
  lat: string,
  lng: string,
}
interface Icompany {
  bs: string,
  name: string,
  catchPhrase: string,
}
