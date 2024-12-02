import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    message: {
        type: String,
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
