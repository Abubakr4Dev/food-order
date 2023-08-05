import { Request, Response, NextFunction } from 'express';
import { CreateVendorInpute } from '../dto';
import { Vendor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVendorInpute>req.body;

    const existingVendor = await Vendor.findOne({ email: email });
    if (existingVendor) {
        return res.json({ message: 'A vendor is exist with this email ID' });
    }

    // generate a salt
    const salt = await GenerateSalt();

    // encrypt the password using the salt
    const userPassword = await GeneratePassword(password, salt);

    const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: []
    });

    res.json(createdVendor);
};

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {};

export const GetVendorByID = async (req: Request, res: Response, next: NextFunction) => {};
