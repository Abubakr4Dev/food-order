import express from 'express';
import { AdminRoute, VendorRoute } from './routes';
import { connectDB } from './db/connect';
import { MONGO_URL, SERVER_PORT } from './config/config';

const app = express();

app.use(express.json());

app.use('/api/v1/admin', AdminRoute);
app.use('/api/v1/vendor ', VendorRoute);

// Connect to Mongo , Only start the server if Mongo Connected
const start = async () => {
    try {
        await connectDB(MONGO_URL);
        app.listen(SERVER_PORT, () => {
            console.log(`Server is listing on port ${SERVER_PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
