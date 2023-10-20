import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.ceil(Math.random() * 999999)}-${
    newCabin.image.name
  }`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) throw new Error(error.message);

  // 2. upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. if there was an error while uploading image to storage, delete the new created cabin

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    throw new Error(error.message);
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
