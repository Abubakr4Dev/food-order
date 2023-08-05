import express, { Request, Response, NextFunction } from 'express';
import { GetVendorByID, GetVendors, createVendor } from '../controllers';
const router = express.Router();

router.route('/vendor').post(createVendor);
router.route('/vendor').get(GetVendors);
router.get('/vendor/:id', GetVendorByID);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'hello from Amdin' });
});

export { router as AdminRoute };
