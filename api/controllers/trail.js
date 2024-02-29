import Trail from "../models/trail.js"
export const createTrail = async(req,res,next) =>{
    const newTrail = new Trail(req.body); // Utilisez la classe `Trail` au lieu de `trail`
    try {
        const savedTrail = await newTrail.save();
        res.status(200).json(savedTrail);
    } catch (error) {
        next(error);
    }
}
export const updateTrail = async(req,res,next) =>{
    try {
        const updateTrail= await Trail.findByIdAndUpdate(req.params.id,
             {$set : req.body},
             {new: true})
        res.status(200).json(updateTrail);
    } catch (error) {
        next(error);
    }
}
export const deleteTrail = async(req,res,next) =>{
    try {
        await Trail.findByIdAndDelete(req.params.id
                 )
            res.status(200).json("Trail has been deleted");
        } catch (error) {
        next(error);
    }
}
export const getTrail = async(req,res,next) =>{
    try {
        const trail= await Trail.findById(req.params.id
             )
        res.status(200).json(trail);
    } catch (error) {
        next(error);
    }
}
export const getTrails  = async(req,res,next) =>{
    const failed=true;
    if (failed) return next(createError(401,"You are not authentificate"));
    try {
        const trails= await Trail.find(req.params.id
             )
        res.status(200).json(trails);
    } catch (error) {
        next(error);
    }
}