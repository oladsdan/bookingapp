import Hotel from "../modals/Hotel.js"

export const createHotel = async (req, res, next) => {
     // we instantiate the hotel model
     const newHotel = new Hotel(req.body )
    
    
     try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch(err){
        next(err)
        res.status(500).json(err)
    }
}

export const updatedHotel = async (req, res, next) => {
    try{
        const {id} = req.params
        const updatedHotel = await Hotel.findByIdAndUpdate(id, {set: req.body}, {new:true})
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500).send(`server error`)
    }
}

export const deleteHotel = async (req, res, next) => {
    try{
        const {id} = req.params
        const updatedHotel = await Hotel.findByIdAndDelete(id)
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err)
        res.status(500).send(`server error`)
    }

}

export const getHotelId = async (req, res, next) => {
    try{
        const {id} = req.params
        const hotel = await Hotel.findById(id)
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).send(`server error`)
    }

}

export const getAllHotel = async (req, res, next) => {
    try{
        const hotel = await Hotel.find()
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).send(`server error`)
    }

}