// E:\project\codingJO\server\migrations\20240212051759-create_user.js

module.exports = {
  async up(db, client) {
    await db.collection('users').insertMany([
      {
        username: "userone",
        email: "userone@example.com",
        password: "password1",
        isAdmin: false,
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date("2024-02-01")
      },
      {
        username: "usertwo",
        email: "usertwo@example.com",
        password: "password2",
        isAdmin: true,
        createdAt: new Date("2024-02-02"),
        updatedAt: new Date("2024-02-02")
      },
      {
        username: "userthree",
        email: "userthree@example.com",
        password: "password3",
        isAdmin: false,
        createdAt: new Date("2024-02-03"),
        updatedAt: new Date("2024-02-03")
      },
      {
        username: "userfour",
        email: "userfour@example.com",
        password: "password4",
        isAdmin: false,
        createdAt: new Date("2024-02-04"),
        updatedAt: new Date("2024-02-04")
      },
      {
        username: "userfive",
        email: "userfive@example.com",
        password: "password5",
        isAdmin: true,
        createdAt: new Date("2024-02-05"),
        updatedAt: new Date("2024-02-05")
      }
    ]);
  }
  ,

  async down(db, client) {
    await db.collection('users').deleteMany({});
  }
};
