const Listing =  require("../models/listing");
const Review = require("../models/review");


//post review controller
module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author =  req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
req.flash("success","Review added!!");
    res.redirect(`/listings/${listing._id}`);
  };


//delete review controller
module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted!!");
    res.redirect(`/listings/${id}`);
  };