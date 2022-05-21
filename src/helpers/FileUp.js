export const FileUp = async (file) => {
    const urlCloudinary = ''
    const formData = new FormData()

    formData.append('upload_preset', 'frontend9'); //conectar con cloudinary, en este caso en amazonas
    formData.append('file', file); // lo que voy a subir 

    const resp = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    console.log(data.secure_url)
    return data.secure_url

}