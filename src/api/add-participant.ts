import type { APIRoute } from "astro";
import { db } from "../lib/firebase-admin";

export const POST: APIRoute = async ({ request }) => {
  const { name, wishlist } = await request.json();

  try {
    await db.collection("participants").add({ name, wishlist });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erreur lors de l’ajout" }), {
      status: 500,
    });
  }
};
