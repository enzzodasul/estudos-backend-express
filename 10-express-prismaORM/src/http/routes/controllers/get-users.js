import express from 'express';
export const router = express.Router();

import { prisma } from '../../../lib/prisma.js';

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return res.json(users);
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
});
