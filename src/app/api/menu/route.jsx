// src/api/menu.js
// import connectDB from '@config/database';
import { menuItems } from "@/utils/constants"; // src/utils/constants.js

export const GET = async (req, res) => {
  try {
    // await connectDB();

    return new Response(JSON.stringify(menuItems), {
      status: 200,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
  } catch (error) {
    console.log(error);
    return new Response(error, { status: 500 });
  }
}