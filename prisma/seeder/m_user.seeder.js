const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function userSeed() {
  try {
    const salt = await bcrypt.genSalt();
    await prisma.m_user.createMany({
      data: [
        {
          u_name: "Admin",
          u_email: "admin@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "admin",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Novi Handayani",
          u_email: "Novi@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "director",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Director",
          u_email: "director@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "director",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "user",
          u_email: "user@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "manager",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Siti Mariyam",
          u_email: "siti@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "manager",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Vivi Wasiah",
          u_email: "vivi@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "manager",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Manager",
          u_email: "manager@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "manager",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Komariah Santi",
          u_email: "komariah@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Aulia Novianty",
          u_email: "aulia@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "M.Azuari Rahman",
          u_email: "azuari@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Nahda Eliza Zaeni",
          u_email: "nahda@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Ikromullah",
          u_email: "ikromullah@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Supervisor",
          u_email: "supervisor@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "supervisor",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Ara ariyanti",
          u_email: "ara@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Sanusi",
          u_email: "sanusi@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Entin",
          u_email: "entin@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Sri Wahyuni",
          u_email: "sriwiw@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Ruli Saputra",
          u_email: "Ruli@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Romi pangestuda",
          u_email: "romi@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
        {
          u_name: "Operator",
          u_email: "operator@gmail.com",
          u_password: await bcrypt.hash("12345678", salt),
          title: "operator",
          division_id: 6,
          branch_id: 1
        },
      ],
    });
    console.log("Seed data for m_user created successfully.");
  } catch (error) {
    console.error("Error creating seed data for m_user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = { userSeed };