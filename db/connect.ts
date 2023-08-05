import mongoose from 'mongoose';

export const connectDB = async (url: string) => {
    return mongoose
        .connect(url, {
            retryWrites: true,
            w: 'majority'
        })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('Unable to connect to MongoDB ' + error);
        });
};
