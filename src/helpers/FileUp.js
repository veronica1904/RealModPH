//la estructura o configuracion de cloudinary sera la misma, recordemos cambiar el nombre de nuestro id en la ruta de la url


export const FileUp = async (file) => {
    const urlCloudinary = 'https://api.cloudinary.com/v1_1/veronicaduque/upload'
    const formData = new FormData()


    // archivo a subir, el realmod es el nombre que le doy en cloudinary
    formData.append('upload_preset', 'realmod'); 
    //le indico que sera de tipo archivo
    formData.append('file', file); 

    const resp = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    console.log(data.secure_url)
    return data.secure_url

}