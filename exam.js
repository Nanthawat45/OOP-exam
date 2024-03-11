class Account {
  username = "";
  password = "";
  status = "";
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }
  //   login(username, password) {
  //     return this.login;
  //   }
  //   returnpassword(){
  //     return this.returnpassword;
  //   }
}

class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  toString() {
    return `[ name = ${this.name},
    address = ${this.address},
    email = ${this.email}
    phone = ${this.phone}
    accountType = ${this.accountType}]`;
  }
}

class Receptionist {
  createBooking() {
    return this.createBooking;
  }
}

class Guest {
  totalRoomBooked = 0;
  constructor(totalRoomBooked) {
    this.totalRoomBooked = totalRoomBooked;
  }
  createBooking() {
    return this.createBooking;
  }
}

class RoomBooking {
  reservationNumber = "";
  startDare = "";
  durationDays = 0;
  staus = "";
  createdBy = "";
  constructor(reservationNumber, startDare, durationDays, staus, createdBy) {
    this.reservationNumber = reservationNumber;
    this.startDare = startDare;
    this.durationDays = durationDays;
    this.staus = staus;
    this.createdBy = createdBy;
  }
  getDetail() {
    return this.getDetail;
  }
  createBooking() {
    return this.createBooking;
  }
}

class Notiflcation {
  notiflcationId = 0;
  createOn = "";
  content = "";
  sender = "";
  recipient = "";
  constructor(notiflcationId, createOn, content, sender, recipient) {
    this.notiflcationId = notiflcationId;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }
  send() {
    return this.send;
  }
}

class Room {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = "";
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable() {
    return this.isRoomAvailable;
  }
  createRoom() {
    return this.createRoom;
  }
}

class Hotel {
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location, location;
  }
  getRooms() {
    return this.getRooms;
  }
  addnewRooms() {
    return this.addnewRooms;
  }
}

class AccountType {
  static Guest = new AccountType("guest");
  static Receptionist = new AccountType("receptionist");
  constructor(Guest, Receptionist) {
    this.Guest = Guest;
    this.Receptionist = Receptionist;
  }
}

class AccountStatus {
  static ACTIVE = new AccountType("active");
  static BANNED = new AccountType("banned");
  constructor(status) {
    this.status = status;
  }
}

class RoomStatus {
  static AVAILABLE = new AccountType("available");
  static DISAVAILABLE = new AccountType("disavailable");
  static LATECHECKOUT = new AccountType("lateCheckout");
  static EARLYCHECKELN = new AccountType("earlyCheckeln");
  constructor(status) {
    this.status = status;
  }
}

class BookingStatus {
  static CONFIRMED = new AccountType("confirmed");
  static CANCEL = new AccountType("cancel");
  constructor(status) {
    this.status = status;
  }
}

const main = () => {
  const Room1 = new Room("Room1", "Double bed Sea view", "1111", "Available");
  const Room2 = new Room("Room2", "Twin bed pool view", "2222", "Available");
  const Room3 = new Room("Room3", "Twin bed Sea view", "3333", "Available");
  const Room4 = new Room("Room4", "Double  bed pool view", "4444", "Available");

  const Guest1 = new Guest(
    "Alice",
    "หมู่บ้านไม่รู้1",
    "Alice@gmail.com",
    "0811111111",
    "000111110001"
  );
  const Guest2 = new Guest(
    "Bob",
    "หมู่บ้านไม่รู้2",
    "Alice@gmail.com",
    "082222222",
    "000222220002"
  );

  const use1 = new Notiflcation(
    "01",
    "16/03/2024",
    "3",
    "confirmed",
    "Bob"
  );
  const use2 = new Notiflcation(
    "02",
    "19/03/2024",
    "5",
    "confirmed",
    "Alice"
  );
  const Receptionist1 = new Receptionist("Catherine");
   const Receptionist2 = new Receptionist("David");

  //   const test = new Room("ROOM:[", roomNumber, style,  roomPrice);
  //console.log(test);
  console.log(Room1);
  console.log(Room2);
  console.log(Room3);
  console.log(Room4);

//   const test1 = new RoomBooking();

console.log(use1);
console.log("ให้ Catherine จองให้ ", use2);
};
main();
