import models from '../database/models';
import { decodeToken } from '../helpers/manageToken';
import sequelize from 'sequelize'

const { Op } = sequelize;

class ReportController {

    static async createReport(req, res) {
        try {

            const payload = req.headers.token;
            const decodedPayload = decodeToken(payload);
            const userId = parseInt(decodedPayload.id);
            const { report_description } = req.body;
            const existingReport = await models.Report.findOne({
                where: {
                    [Op.and]: [{ report_description }, { userId }]

                }
            })
            if (existingReport !== null) {
                return res.status(409).json({ error: 'Sorry! This report already exists.' })
            } else {

                const tpc_staff = decodedPayload.first_name + ' ' + decodedPayload.last_name;
                const { dataValues } = await models.Report.create({ tpc_staff, userId, ...req.body });
                return res.status(200).json({ message: 'Report Created.', dataValues })
            }

        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export default ReportController;
