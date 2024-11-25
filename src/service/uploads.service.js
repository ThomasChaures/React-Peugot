export async function postUploads(files) {
  const response = await fetch( "http://localhost:3333/upload", {
    method: "POST",
    body: files
  } )
  return response.json() 

}
