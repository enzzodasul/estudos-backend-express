import express from 'express';
import { prisma } from '../../../lib/prisma.js';

export const router = express.Router();

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        const userUpdated = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                phone,
            },
        });

        return res.json(userUpdated);
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: 'ERROR UPDATING USER',
        });
    }
});
