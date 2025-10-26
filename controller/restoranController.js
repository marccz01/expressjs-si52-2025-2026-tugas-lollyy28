import modelRestoran from "../model/modelRestoran.js"

export const createRestoran = async (req, res) => {
  try {
   const request = req.body

        const response = await modelRestoran.create({
            restoranName : request.restoranName,
            location : request.location,
            favoriteDish : request.favoriteDish
        })

        res.status(201).json({
            message : "Data Restoran berhasil dibuat",
            data : response
        })
        
    } catch (error) {
        res.status(500).json({
           message : error,
            data : null
        })
  }
};

export const listRestoran = async (req, res) => {
  try {
    const data = await modelRestoran.find({})

        res.status(200).json({
            message: "List Data Restoran",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }
};

export const updateRestoran = async (req, res) => {
  try {
    const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

         const response = await modelRestoran.findByIdAndUpdate(id, {
            restoranName : request.restoranName,
            location : request.location,
            favoriteDish : request.favoriteDish
         })

        if(!response){
            return res.status(500).json({
                message : "Data gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Data restoran berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }
};

export const deleteRestoran = async (req, res) => {
  try {
    const id = req.params.id
        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

        const response = await modelRestoran.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                message : "Data restoran berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                message : "Data restoran tidak ditemukan",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }

  
};