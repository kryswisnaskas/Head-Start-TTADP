import { User, sequelize } from '../models';
import logger from '../logger';

const namespace = 'SERVICE:ACCESS_VALIDATION';

/**
 * Finds or creates a user in the database.
 *
 * //potentially use also or instead of the user id provided by HSES
 * @param {Object} userData - user information containing email address
 * @returns {Promise<any>} - returns a promise
 */
export default function findOrCreateUser(data) {
  return sequelize.transaction((transaction) => User.findOrCreate({
    where: {
      email: data.email,
    },
    transaction,
  }) // findOrCreate API returns 2 values (instance, created). We only need to return the first.
    .then((result) => result[0])
    .catch(() => {
      logger.error(`${namespace} - Error finding or creating User in database.`);
      throw new Error('Error finding or creating user in database');
    }));
}
