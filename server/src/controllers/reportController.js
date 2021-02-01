import models from '../database/models';
import { decodeToken } from '../helpers/manageToken';
import sequelize from 'sequelize'
import lodash from 'lodash';

const { Op } = sequelize;

class ReportController {

    static async createReport(req, res) {
        try {

            // const decodedUserData = decodeToken(req.headers.token);
            // const userId = req.body.userId ? req.body.userId : decodedUserData.id;
            const { report_description, userId } = req.body;

            const existingReport = await models.Report.findOne({
                where: {
                    [Op.and]: [{ report_description }, { userId }]

                }
            })

            if (existingReport !== null) {
                return res.status(409).json({ error: 'Sorry! This report already exists.' });
            } else {
                // const tpc_staff = `${decodedUserData.first_name} ${decodedUserData.last_name}`
                const { dataValues } = await models.Report.create(req.body);
                return res.status(200).json({ message: 'Report Created.', dataValues })
            }

        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async allReports(req, res) {

        try {

            const data = await models.Report.findAll({ raw: true });

            if (data) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: 'No data yet.' })
            }

        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async getOneReport(req, res) {

        try {
            const reportId = req.params.id
            const oneReport = await models.Report.findOne({ where: { id: parseInt(reportId) } });

            if (!reportId) {
                return res.status(404).json({ message: 'Sorry no report found.' })
            } else {
                return res.status(200).json(oneReport);
            }
        } catch (error) {
            if (error) return res.status(500).json(error);
        }
    }

    static async updateColumn(req, res) {
        const { dataValues } = await models.Report.update(req.body);
        return res.status(200).json({ message: 'Cell updated successully', dataValues })
    }
}

export default ReportController;
