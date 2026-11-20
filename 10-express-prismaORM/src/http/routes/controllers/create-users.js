import express from 'express';
export const router = express.Router();

import { prisma } from '../../../lib/prisma.js';

router.post('/', async (req, res) => {
    try {
        console.log('BODY RECEBIDO:', req.body);

        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                message: 'NAME, EMAIL AND PHONE ARE REQUIRED',
                received: req.body,
            });
        }

        await prisma.user.create({
            data: {
                name,
                email,
                phone,
            },
        });

        return res.status(201).json({
            message: 'USER CREATED SUCCESSFULLY',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: 'ERROR CREATING USER',
        });
    }
});
