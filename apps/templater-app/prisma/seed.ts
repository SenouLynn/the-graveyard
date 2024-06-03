import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Jack",
      email: "yomama@jumbo.com",
    },
  });
  await prisma.user.create({
    data: {
      name: "Ryan",
      email: "begonya@beepboop.com",
    },
  });
  await prisma.user.create({
    data: {
      name: "Adam",
      email: "yurt@rock.com",
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
});
