import { Router } from 'express';
const router = Router();

/**import controllers */
import * as controller from '../controller/controller.js'

/**Questions Routes API*/

// router.get('/questions', (req, res) => {

//     res.json('questions api get request');

// })

// router.get('/questions', controller.getQuestions);
// router.post('/questions',controller.insertQuestions);

//alternative method to group all requests

router.route('/questions')
        .get(controller.getQuestions) /** GET request */
        .post(controller.insertQuestions) /** POST request */
        .delete(controller.deleteQuestions) /** DELETE request */

router.route('/result')
    .get(controller.getResult)
    .post(controller.postResult)
 
export default router;