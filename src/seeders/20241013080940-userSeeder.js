/** @type {import('sequelize-cli').Migration} */
import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  return queryInterface.bulkInsert('Users', [
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: '$2a$10$GXjN8FbIXMxdBA4uAEGjaetxb2VwAuevz2kfJveSdNl695mYDp0WS', // password
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  return queryInterface.bulkDelete('Users', null, {});
};
