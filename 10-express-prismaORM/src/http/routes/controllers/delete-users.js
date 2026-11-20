import express from 'express';
import { prisma } from '../../../lib/prisma.js';

export const router = express.Router();

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.user.delete({
            where: { id },
        });

        return res.status(204).send();
    } catch (error) {
        if (error) {
            console.log(error);
        }

        return res.status(500).json({
            message: 'ERROR UPDATING USER',
        });
    }
});
